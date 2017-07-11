import {Session} from "../util/session";
import {Component, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BaseComponent} from "./base.component";

@Component({
    selector: 'step-nav',
    templateUrl: 'templates/page/nav.html'
})
@Injectable()
export class NavComponent extends BaseComponent {
    constructor(private router: Router) {
        super();
    }

    urlEquals(idx: number): boolean {
        return this.router.url === this.steps[idx];
    }
}