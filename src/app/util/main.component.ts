import {Session} from "./session";
import {ViewChild} from "@angular/core";

export class MainComponent {

    @ViewChild('param1') param1 : any;
    @ViewChild('param2') param2 : any;
    @ViewChild('param3') param3 : any;
    @ViewChild('param4') param4 : any;

    constructor(){}

    save(key: string, value: string) : void {
        Session.set(key, value);
    }

    get_value(key: string) : string {
        return Session.get(key);
    }

    clear() : void {
        Session.clear();
    }
}