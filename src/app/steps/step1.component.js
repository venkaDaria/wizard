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
var MainComponent1 = (function (_super) {
    __extends(MainComponent1, _super);
    function MainComponent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MainComponent1;
}(main_component_1.MainComponent));
MainComponent1 = __decorate([
    core_1.Component({
        selector: 'step1-main',
        templateUrl: 'templates/main/step1.html'
    })
], MainComponent1);
exports.MainComponent1 = MainComponent1;
var FooterComponent1 = (function () {
    function FooterComponent1() {
    }
    return FooterComponent1;
}());
FooterComponent1 = __decorate([
    core_1.Component({
        selector: 'step1-footer',
        templateUrl: 'templates/footer/step1.html'
    }),
    __metadata("design:paramtypes", [])
], FooterComponent1);
exports.FooterComponent1 = FooterComponent1;
//# sourceMappingURL=step1.component.js.map