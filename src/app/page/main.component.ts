import {Session} from "../util/session";
import {Component, Injectable} from "@angular/core";
import {ValidationService} from "../service/wizard.service";
import {BaseComponent} from "./base.component";
import {Router} from "@angular/router";

@Component({
    selector: 'step-main',
    templateUrl: 'templates/page/main.html'
})
@Injectable()
export class MainComponent extends BaseComponent {
    constructor(private service: ValidationService, protected router: Router) {
        super(router);
    }

    goNext(idx: number, value: string): void {
        Session.set('loading', true);
        Session.remove('errorMessage');

        this.service.isValid(this.params[idx], value)
            .then(answer => {
                if (answer['errorMessage']) {
                    Session.set('errorMessage', answer['errorMessage']);
                }
                else {
                    Session.set(this.params[idx], value);

                    /*
                    this.router.navigateByUrl(this.steps[idx])
                        .then((success: any) => console.log('Go to ' + this.steps[idx]))
                        .catch((err: any) => console.error(err));;
                    */

                    window.location.href = this.steps[idx];
                }
                Session.remove('loading');
            })
            .catch(MainComponent.handleError);
    }

    getValue(key: any): string {
        return Session.get(this.params[key]);
    }

    clear(): void {
        Session.clear();
        window.location.href = '/';
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        Session.remove('loading');

        return Promise.reject(error.message || error);
    }
}