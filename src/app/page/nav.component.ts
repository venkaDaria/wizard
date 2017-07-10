import {Session} from "../util/session";
import {Component, Injectable} from "@angular/core";
import {Router} from "@angular/router";

export class NavComponentBase {
    constructor() {
    }

    go(url: string) {
        Session.remove('errorMessage');
        window.location.href = url;
    }

    has_value(key: string): boolean {
        return Session.has(key);
    }
}

@Component({
    selector: 'step-nav',
    templateUrl: 'templates/page/nav.html'
})
@Injectable()
export class NavComponent extends NavComponentBase{
    constructor(private router: Router) {
        super();
    }

    url_equals(url: string): boolean {
        return this.router.url === url;
    }
}