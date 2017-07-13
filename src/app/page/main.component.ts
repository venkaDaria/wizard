import {Session} from "../util/session";
import {Component, Injectable, ViewChild} from "@angular/core";
import {ValidationService} from "../service/wizard.service";
import {BaseComponent} from "./base.component";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'templates/page/main.html'
})
@Injectable()
export class MainComponent extends BaseComponent {
    @ViewChild('form')
    private form: any;

    constructor(protected service: ValidationService, protected router: Router) {
        super(router);
    }

    goNext(idx: number) {
        let self = this;
        let form = this.form.nativeElement;

        this.go(idx, goNextAsync);

        async function goNextAsync() {
            let answer = await self.service.isValid(self.params[idx], form);

            if (answer['errorMessage']) {
                Session.set('errorMessage', answer['errorMessage']);
            } else {
                Session.set(self.params[idx], form[self.params[idx]].value);
                await self.router.navigateByUrl(self.steps[idx]);
            }
        }
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