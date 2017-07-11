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
var base_component_1 = require("./base.component");
var router_1 = require("@angular/router");
var MainComponent = MainComponent_1 = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(service, router) {
        var _this = _super.call(this, router) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    MainComponent.prototype.goNext = function (idx, value) {
        var _this = this;
        session_1.Session.set('loading', true);
        session_1.Session.remove('errorMessage');
        this.service.isValid(this.params[idx], value)
            .then(function (answer) {
            if (answer['errorMessage']) {
                session_1.Session.set('errorMessage', answer['errorMessage']);
            }
            else {
                session_1.Session.set(_this.params[idx], value);
                _this.router.navigateByUrl(_this.steps[idx])
                    .then(function (success) { return console.log('Go to ' + _this.steps[idx]); })
                    .catch(function (err) { return console.error(err); });
            }
            session_1.Session.remove('loading');
        })
            .catch(MainComponent_1.handleError);
    };
    MainComponent.prototype.getValue = function (key) {
        return session_1.Session.get(this.params[key]);
    };
    MainComponent.prototype.clear = function () {
        session_1.Session.clear();
        this.router.navigateByUrl('/')
            .then(function (success) { return console.log('Go to first page'); })
            .catch(function (err) { return console.error(err); });
    };
    MainComponent.handleError = function (error) {
        console.error('An error occured', error);
        session_1.Session.remove('loading');
        return Promise.reject(error.message || error);
    };
    return MainComponent;
}(base_component_1.BaseComponent));
MainComponent = MainComponent_1 = __decorate([
    core_1.Component({
        selector: 'step-main',
        templateUrl: 'templates/page/main.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [wizard_service_1.ValidationService, router_1.Router])
], MainComponent);
exports.MainComponent = MainComponent;
var MainComponent_1;
//# sourceMappingURL=main.component.js.map