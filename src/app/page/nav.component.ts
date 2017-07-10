import {Session} from "../util/session";
import {Component, Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'step-nav',
    templateUrl: 'templates/page/nav.html'
})
@Injectable()
export class NavComponent {

    constructor(private router: Router) {
    }

    has_value(key: string): boolean {
        return Session.has(key);
    }

    url_equals(url: string): boolean {
        return this.router.url === url;
    }
}