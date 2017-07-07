"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Session = (function () {
    function Session() {
    }
    Session.set = function (key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };
    Session.get = function (key) {
        if (Session.has(key)) {
            return JSON.parse(window.sessionStorage[key]);
        }
        return null;
    };
    Session.has = function (key) {
        return !!window.sessionStorage[key];
    };
    Session.clear = function () {
        window.sessionStorage.clear();
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map