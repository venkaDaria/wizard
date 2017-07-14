import {Session} from "../util/session";
import {ValidationService} from "../service/wizard.service";
import {ViewChild} from "@angular/core";
import {BaseComponent} from "./base.component";
import {Router} from "@angular/router";
import {stepStorage} from "../util/storage";

export abstract class StepComponent extends BaseComponent {

    private isValid: boolean;

    @ViewChild('form')
    private form: any;

    constructor(private service: ValidationService, router: Router) {
        super(router);

        let step = stepStorage.get(this.constructor.name);
        this.isValid = step != undefined ? step.isValidOrNot() : false;
    }

    goNext(idx: number) {
        let self = this;
        let form = this.form.value;

        this.go(idx, goNextAsync);

        async function goNextAsync() {
            let answer = await self.service.isValid(form);
            stepStorage.get(self.constructor.name).isValid = !answer['errorMessage'];

            if (!answer['errorMessage']) {
                Object.keys(form).forEach((key: string) => Session.set(key, form[key]));
                await self.router.navigateByUrl(self.steps[idx]);
            } else {
                Session.set('errorMessage', answer['errorMessage']);
            }
        }
    }

    isValidOrNot(): boolean {
        return this.isValid;
    }
}
