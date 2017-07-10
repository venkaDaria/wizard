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
var wizard_service_1 = require("../service/wizard.service");
var MainComponent = (function () {
    function MainComponent(service) {
        this.service = service;
    }
    MainComponent.prototype.save = function (key, value) {
        var _this = this;
        this.service.is_valid(key, value)
            .then(function (answer) { return !!answer['errorMessage'] ? session_1.Session.set(key, value)
            : _this.errorMessage = answer['errorMessage']; })
            .catch(this.handle_error);
    };
    MainComponent.prototype.get_value = function (key) {
        return session_1.Session.get(key);
    };
    MainComponent.prototype.clear = function () {
        session_1.Session.clear();
    };
    MainComponent.prototype.handle_error = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild('param1'),
    __metadata("design:type", Object)
], MainComponent.prototype, "param1", void 0);
__decorate([
    core_1.ViewChild('param2'),
    __metadata("design:type", Object)
], MainComponent.prototype, "param2", void 0);
__decorate([
    core_1.ViewChild('param3'),
    __metadata("design:type", Object)
], MainComponent.prototype, "param3", void 0);
__decorate([
    core_1.ViewChild('param4'),
    __metadata("design:type", Object)
], MainComponent.prototype, "param4", void 0);
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