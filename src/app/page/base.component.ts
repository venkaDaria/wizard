import {Session} from "../util/session";
import {Router} from "@angular/router";
import {Component, Injectable} from "@angular/core";
import {StepComponent} from "./base.step.component";
import {stepStorage} from "../util/storage";

@Component({
    templateUrl: 'templates/page/main.html'
})
@Injectable()
export class BaseComponent {

    protected steps = ["/step1", "/step2", "/step3", "/step4", "/final"];

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

    hasValue(key: string): boolean {
        return Session.has(key);
    }

    getValue(key: string): string {
        return Session.get(key);
    }

    clear() {
        Session.clear();

        this.router.navigateByUrl('/')
            .then((success: any) => console.log('Go to first page'))
            .catch((err: any) => console.error(err));
    }

    onActivate(componentRef: StepComponent) {
        stepStorage.addIfNotExist(componentRef);
    }
}