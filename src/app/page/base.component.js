"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("../util/session");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var BaseComponent = (function () {
    function BaseComponent(router) {
        this.router = router;
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
        var _this = this;
        session_1.Session.remove('errorMessage');
        this.router.navigateByUrl(this.steps[idx])
            .then(function (success) { return console.log('Go to ' + _this.steps[idx]); })
            .catch(function (err) { return console.error(err); });
    };
    BaseComponent.prototype.hasValue = function (key) {
        return session_1.Session.has(this.params[key]);
    };
    BaseComponent = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map