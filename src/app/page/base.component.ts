import {Session} from "../util/session";

export class BaseComponent {
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

    go(idx: number) : void {
        Session.remove('errorMessage');
        window.location.href = this.steps[idx];
    }

    hasValue(key: any): boolean {
        return Session.has(this.params[key]);
    }
}
