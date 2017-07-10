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

    @ViewChild('param1') param1: any;
    @ViewChild('param2') param2: any;
    @ViewChild('param3') param3: any;
    @ViewChild('param4') param4: any;

    constructor(private service: ValidationService) {
        super();
    }

    go_next(url: string, key: string, value: string): void {
        Session.set('loading', true);
        Session.remove('errorMessage');

        this.service.is_valid(key, value)
            .then(answer => {
                if (answer['errorMessage']) {
                    Session.set('errorMessage', answer['errorMessage']);
                }
                else {
                    Session.set(key, value);
                    window.location.href = url;
                }
                Session.remove('loading');
            })
            .catch(this.handle_error);

    }

    get_value(key: string): string {
        return Session.get(key);
    }

    has_value(key: string): boolean {
        return Session.has(key);
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