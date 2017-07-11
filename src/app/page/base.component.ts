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

    go(idx: number) {
        Session.remove('errorMessage');

        this.router.navigateByUrl(this.steps[idx])
            .then((success: any) => console.log('Go to ' + this.steps[idx]))
            .catch((err: any) => console.error(err));
    }

    hasValue(key: any): boolean {
        return Session.has(this.params[key]);
    }
}
