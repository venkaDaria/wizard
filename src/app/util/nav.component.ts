import {Session} from "./session";

export class NavComponent {

    constructor(){}

    has_value(key: string) : boolean {
        return Session.has(key);
    }
}