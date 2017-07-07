import {Session} from "./session";

export class MainComponent {

    constructor(){}

    save(key: string, value: string) {
        Session.set(key, value);
    }

    clear() {
        Session.clear();
    }

    get_value(key: string) : string {
        console.log("v: " + Session.get(key));
        return Session.get(key);
    }
}