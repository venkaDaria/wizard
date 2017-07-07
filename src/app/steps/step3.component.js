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
var core_1 = require("@angular/core");
var main_component_1 = require("../util/main.component");
var NavComponent3 = (function () {
    function NavComponent3() {
    }
    return NavComponent3;
}());
NavComponent3 = __decorate([
    core_1.Component({
        selector: 'step3-nav',
        templateUrl: 'templates/nav/step3.html'
    }),
    __metadata("design:paramtypes", [])
], NavComponent3);
exports.NavComponent3 = NavComponent3;
var MainComponent3 = (function (_super) {
    __extends(MainComponent3, _super);
    function MainComponent3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MainComponent3;
}(main_component_1.MainComponent));
MainComponent3 = __decorate([
    core_1.Component({
        selector: 'step3-main',
        templateUrl: 'templates/main/step3.html'
    })
], MainComponent3);
exports.MainComponent3 = MainComponent3;
var FooterComponent3 = (function () {
    function FooterComponent3() {
    }
    return FooterComponent3;
}());
FooterComponent3 = __decorate([
    core_1.Component({
        selector: 'step3-footer',
        templateUrl: 'templates/footer/step3.html'
    }),
    __metadata("design:paramtypes", [])
], FooterComponent3);
exports.FooterComponent3 = FooterComponent3;
//# sourceMappingURL=step3.component.js.map