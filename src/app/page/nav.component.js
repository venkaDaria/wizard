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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_component_1 = require("./base.component");
var session_1 = require("../util/session");
var NavComponent = (function (_super) {
    __extends(NavComponent, _super);
    function NavComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavComponent.prototype.urlEquals = function (idx) {
        return this.router.url === this.steps[idx];
    };
    NavComponent.prototype.isDisabled = function (idx) {
        return idx != 0 && !this.isValid(idx - 1);
    };
    NavComponent.prototype.isSuccess = function (idx) {
        return idx < this.steps.length - 1 && this.isValid(idx);
    };
    NavComponent.prototype.isValid = function (idx) {
        return session_1.Session.get(this.steps[idx]);
    };
    NavComponent.setValid = function (key, value) {
        session_1.Session.set(key, value);
    };
    NavComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/page/nav.html'
        })
    ], NavComponent);
    return NavComponent;
}(base_component_1.BaseComponent));
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map