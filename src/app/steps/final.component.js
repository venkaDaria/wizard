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
var nav_component_1 = require("../util/nav.component");
var FinalNavComponent = (function (_super) {
    __extends(FinalNavComponent, _super);
    function FinalNavComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FinalNavComponent;
}(nav_component_1.NavComponent));
FinalNavComponent = __decorate([
    core_1.Component({
        selector: 'final-nav',
        templateUrl: 'templates/nav/final.html'
    })
], FinalNavComponent);
exports.FinalNavComponent = FinalNavComponent;
var FinalMainComponent = (function (_super) {
    __extends(FinalMainComponent, _super);
    function FinalMainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FinalMainComponent;
}(main_component_1.MainComponent));
FinalMainComponent = __decorate([
    core_1.Component({
        selector: 'final-main',
        templateUrl: 'templates/main/final.html'
    })
], FinalMainComponent);
exports.FinalMainComponent = FinalMainComponent;
var FinalFooterComponent = (function () {
    function FinalFooterComponent() {
    }
    return FinalFooterComponent;
}());
FinalFooterComponent = __decorate([
    core_1.Component({
        selector: 'final-footer',
        templateUrl: 'templates/footer/final.html'
    }),
    __metadata("design:paramtypes", [])
], FinalFooterComponent);
exports.FinalFooterComponent = FinalFooterComponent;
//# sourceMappingURL=final.component.js.map