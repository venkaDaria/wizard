import {Session} from "./session";
import {Component, Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'step-nav',
    templateUrl: 'templates/nav/nav.html'
})
@Injectable()
export class NavComponent {

    private router: Router;

    constructor(private _router: Router) {
        this.router = _router;
    }

    has_value(key: string) : boolean {
        return Session.has(key);
    }

    url_equals(url: string) : boolean {
        return this.router.url === url;
    }
}