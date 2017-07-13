import {Session} from "../util/session";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export abstract class BaseComponent {
    protected steps = ["/step1", "/step2", "/step3", "/step4", "/final"];

    protected params = {
        1: 'param1',
        2: 'param2',
        3: 'param3',
        4: 'param4',
        errorMessage: 'errorMessage',
        loading: 'loading'
    };

    constructor(protected router: Router) {
    }

    protected go(idx: number, asyncCall: () => Promise<any>) {
        Session.set('loading', true);
        Session.remove('errorMessage');

        asyncCall()
            .then(() => {
                console.log('Try to go to' + this.steps[idx]);
                Session.remove('loading');
            })
            .catch((err: any) => console.error(err));
    }

    goTo(idx: number) {
        this.go(idx, async () => await this.router.navigateByUrl(this.steps[idx]));
    }

    hasValue(key: any): boolean {
        return Session.has(this.params[key]);
    }
}