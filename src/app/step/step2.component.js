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
var main_component_1 = require("../page/main.component");
var MainComponent2 = (function (_super) {
    __extends(MainComponent2, _super);
    function MainComponent2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MainComponent2;
}(main_component_1.MainComponent));
MainComponent2 = __decorate([
    core_1.Component({
        templateUrl: 'templates/step/step2.html'
    })
], MainComponent2);
exports.MainComponent2 = MainComponent2;
var FooterComponent2 = (function () {
    function FooterComponent2() {
    }
    return FooterComponent2;
}());
FooterComponent2 = __decorate([
    core_1.Component({
        templateUrl: 'templates/footer/step2.html'
    })
], FooterComponent2);
exports.FooterComponent2 = FooterComponent2;
//# sourceMappingURL=step2.component.js.map