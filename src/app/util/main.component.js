"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("./session");
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.save = function (key, value) {
        session_1.Session.set(key, value);
    };
    MainComponent.prototype.clear = function () {
        session_1.Session.clear();
    };
    MainComponent.prototype.get_value = function (key) {
        console.log("v: " + session_1.Session.get(key));
        return session_1.Session.get(key);
    };
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map