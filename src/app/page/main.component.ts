import {Session} from "../util/session";
import {Component, Injectable, ViewChild} from "@angular/core";
import {ValidationService} from "../service/wizard.service";
import {NavComponentBase} from "./nav.component";

@Component({
    selector: 'step-main',
    templateUrl: 'templates/page/main.html'
})
@Injectable()
export class MainComponent extends NavComponentBase {
    constructor(private service: ValidationService) {
        super();
    }

    go_next(idx: number, value: string): void {
        Session.set('loading', true);
        Session.remove('errorMessage');

        this.service.is_valid(this.params[idx], value)
            .then(answer => {
                if (answer['errorMessage']) {
                    Session.set('errorMessage', answer['errorMessage']);
                }
                else {
                    Session.set(this.params[idx], value);
                    window.location.href = this.steps[idx];
                }
                Session.remove('loading');
            })
            .catch(this.handle_error);

    }

    get_value(idx: number): string {
        return Session.get(this.params[idx]);
    }

    clear(): void {
        Session.clear();
        window.location.href = '/';
    }

    private handle_error(error: any): Promise<any> {
        console.error('An error occured', error);
        Session.remove('loading');

        return Promise.reject(error.message || error);
    }
}