export class Session {

    static set(key: string, value: any) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    static get(key: string) {
        if(Session.has(key)) {
            return JSON.parse(window.sessionStorage[key]);
        }
        return null;
    }

    static has(key: string) {
        return window.sessionStorage[key];
    }

    static clear() {
        window.sessionStorage.clear();
    }
}