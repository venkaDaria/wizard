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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.go = function (path) {
        this.router.navigate(['./' + path, { outlets: { main: '', nav: '', footer: '' } }])
            .then(function (success) { return console.log('Go to ' + path); })
            .catch(function (err) { return console.error(err); });
    };
    MainComponent.prototype.go_prev = function (path) {
        this.router.navigate(['./' + path, { outlets: { main: '', nav: '', footer: '' } }])
            .then(function (success) { return console.log('Go to ' + path); })
            .catch(function (err) { return console.error(err); });
    };
    MainComponent.prototype.go_next = function (path) {
        console.log(this.router.createUrlTree(['./' + path, { outlets: { main: '', nav: '', footer: '' } }]).toString());
        this.router.navigate(['./' + path, { outlets: { main: '', nav: '', footer: '' } }])
            .then(function (success) { return console.log('Go to ' + path); })
            .catch(function (err) { return console.error(err); });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map