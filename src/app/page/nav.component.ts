import {Session} from "../util/session";
import {Component, Injectable} from "@angular/core";
import {Router} from "@angular/router";

export class NavComponentBase {
    protected steps = ["/step1", "/step2", "/step3", "/step4", "/final"];

    protected params = {
        1: 'param1',
        2: 'param2',
        3: 'param3',
        4: 'param4',
        errorMessage: 'errorMessage',
        loading: 'loading'
    };

    constructor() {
    }

    go(url: string) {
        Session.remove('errorMessage');
        window.location.href = url;
    }

    has_value(idx: number): boolean {
        return Session.has(this.params[idx]);
    }
}

@Component({
    selector: 'step-nav',
    templateUrl: 'templates/page/nav.html'
})
@Injectable()
export class NavComponent extends NavComponentBase {
    constructor(private router: Router) {
        super();
    }

    url_equals(url: string): boolean {
        return this.router.url === url;
    }
}