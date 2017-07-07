"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("./session");
var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.has_value = function (key) {
        return session_1.Session.has(key);
    };
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map