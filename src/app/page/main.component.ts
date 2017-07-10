import {Session} from "../util/session";
import {Component, Injectable, ViewChild} from "@angular/core";
import {ValidationService} from "../service/wizard.service";

@Component({
    selector: 'step-main',
    templateUrl: 'templates/page/main.html'
})
@Injectable()
export class MainComponent {

    @ViewChild('param1') param1: any;
    @ViewChild('param2') param2: any;
    @ViewChild('param3') param3: any;
    @ViewChild('param4') param4: any;

    errorMessage: string;

    constructor(private service: ValidationService) {
    }

    save(url: string, key: string, value: string): void {
        this.service.is_valid(key, value)
            .then(answer => {
                if (answer['errorMessage']) {
                    this.errorMessage = answer['errorMessage'];
                    window.location.reload();
                }
                else {
                    Session.set(key, value);
                    window.location.href = url;
                }
            })
            .catch(this.handle_error);

    }

    get_value(key: string): string {
        return Session.get(key);
    }

    clear(): void {
        Session.clear();
    }

    private handle_error(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}