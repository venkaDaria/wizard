import {Component} from "@angular/core";
import {BaseComponent} from "./base.component";
import {Session} from "../util/session";

@Component({
    templateUrl: 'templates/page/nav.html'
})
export class NavComponent extends BaseComponent {

    urlEquals(idx: number): boolean {
        return this.router.url === this.steps[idx];
    }

    isDisabled(idx: number) {
        return idx != 0 && !this.isValid(idx - 1);
    }

    isSuccess(idx: number) {
        return idx < this.steps.length - 1 && this.isValid(idx);
    }

    isValid(idx: number): boolean {
        return Session.get(this.steps[idx]);
    }
}