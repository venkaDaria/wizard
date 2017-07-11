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
var wizard_service_1 = require("../service/wizard.service");
var nav_component_1 = require("./nav.component");
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    MainComponent.prototype.go_next = function (url, key, value) {
        session_1.Session.set('loading', true);
        session_1.Session.remove('errorMessage');
        this.service.is_valid(key, value)
            .then(function (answer) {
            if (answer['errorMessage']) {
                session_1.Session.set('errorMessage', answer['errorMessage']);
            }
            else {
                session_1.Session.set(key, value);
                window.location.href = url;
            }
            session_1.Session.remove('loading');
        })
            .catch(this.handle_error);
    };
    MainComponent.prototype.get_value = function (key) {
        return session_1.Session.get(key);
    };
    MainComponent.prototype.has_value = function (key) {
        return session_1.Session.has(key);
    };
    MainComponent.prototype.clear = function () {
        session_1.Session.clear();
        window.location.href = '/';
    };
    MainComponent.prototype.handle_error = function (error) {
        console.error('An error occured', error);
        session_1.Session.remove('loading');
        return Promise.reject(error.message || error);
    };
    return MainComponent;
}(nav_component_1.NavComponentBase));
MainComponent = __decorate([
    core_1.Component({
        selector: 'step-main',
        templateUrl: 'templates/page/main.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [wizard_service_1.ValidationService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map