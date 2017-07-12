import {Session} from "../util/session";
import {Component, Injectable} from "@angular/core";
import {ValidationService} from "../service/wizard.service";
import {BaseComponent} from "./base.component";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'templates/page/main.html'
})
@Injectable()
export class MainComponent extends BaseComponent {
    constructor(private service: ValidationService, protected router: Router) {
        super(router);
    }

    async goNext(idx: number, value: string) {
        Session.set('loading', true);
        Session.remove('errorMessage');

        let answer = await this.service.isValid(this.params[idx], value);

        if (answer['errorMessage']) {
            Session.set('errorMessage', answer['errorMessage']);
        } else {
            Session.set(this.params[idx], value);

            this.router.navigateByUrl(this.steps[idx])
                .then((success: any) => console.log('Go to ' + this.steps[idx]))
                .catch((err: any) => console.error(err));
        }

        Session.remove('loading');
    }

    getValue(key: any): string {
        return Session.get(this.params[key]);
    }

    clear() {
        Session.clear();

        this.router.navigateByUrl('/')
            .then((success: any) => console.log('Go to first page'))
            .catch((err: any) => console.error(err));
    }
}