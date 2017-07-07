import { Router } from "@angular/router";
import {Injectable} from "@angular/core";
import {Session} from "./session";

@Injectable()
export class MainComponent {

    constructor(private router: Router){}

    go_next(param: string) {
        console.log(Session);
        console.log(param);
        console.log(this.get(param));
        Session.set(param, this.get(param));
    }

    get(param: string) : string {
        console.log(this.router);
        return this.router.parseUrl(this.router.url).queryParamMap.get(param);
    }

    static go_retry() {
        Session.clear();
    }

    static get_value(param: string) : string {
        console.log(Session);
        console.log(param);
        console.log(Session.get(param));
        return Session.get(param);
    }
}