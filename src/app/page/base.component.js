"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("../util/session");
var BaseComponent = (function () {
    function BaseComponent() {
        this.steps = ["/step1", "/step2", "/step3", "/step4", "/final"];
        this.params = {
            1: 'param1',
            2: 'param2',
            3: 'param3',
            4: 'param4',
            errorMessage: 'errorMessage',
            loading: 'loading'
        };
    }
    BaseComponent.prototype.go = function (idx) {
        session_1.Session.remove('errorMessage');
        window.location.href = this.steps[idx];
    };
    BaseComponent.prototype.hasValue = function (key) {
        return session_1.Session.has(this.params[key]);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map