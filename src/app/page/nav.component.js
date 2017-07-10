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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavComponent = (function () {
    function NavComponent(_router) {
        this._router = _router;
        this.router = _router;
    }
    NavComponent.prototype.has_value = function (key) {
        return session_1.Session.has(key);
    };
    NavComponent.prototype.url_equals = function (url) {
        return this.router.url === url;
    };
    return NavComponent;
}());
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