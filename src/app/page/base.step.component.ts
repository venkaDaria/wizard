import {Session} from "../util/session";
import {ValidationService} from "../service/wizard.service";
import {ViewChild} from "@angular/core";
import {BaseComponent} from "./base.component";
import {Router} from "@angular/router";

export abstract class StepComponent extends BaseComponent {

    @ViewChild('form')
    private form: any;

    constructor(private service: ValidationService, router: Router) {
        super(router);
    }

    goNext(idx: number) {
        let self = this;
        let form = this.form.value;

        this.go(idx, goNextAsync);

        async function goNextAsync() {
            let answer = await self.service.isValid(form);
            Session.set(self.router.url, !answer['errorMessage']);

            if (!answer['errorMessage']) {
                Object.keys(form).forEach((key: string) => Session.set(key, form[key]));

                Session.set('next', true);
                await self.router.navigateByUrl(self.steps[idx]);
            } else {
                Session.set('errorMessage', answer['errorMessage']);
            }
        }
    }
}
