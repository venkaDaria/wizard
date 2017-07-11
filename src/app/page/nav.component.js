"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavComponentBase = (function () {
    function NavComponentBase() {
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
    NavComponentBase.prototype.go = function (url) {
        session_1.Session.remove('errorMessage');
        window.location.href = url;
    };
    NavComponentBase.prototype.has_value = function (idx) {
        return session_1.Session.has(this.params[idx]);
    };
    return NavComponentBase;
}());
exports.NavComponentBase = NavComponentBase;
var NavComponent = (function (_super) {
    __extends(NavComponent, _super);
    function NavComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    NavComponent.prototype.url_equals = function (url) {
        return this.router.url === url;
    };
    return NavComponent;
}(NavComponentBase));
NavComponent = __decorate([
    core_1.Component({
        selector: 'step-nav',
        templateUrl: 'templates/page/nav.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map