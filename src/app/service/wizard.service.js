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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var constants_1 = require("../util/constants");
var ValidationService = (function () {
    function ValidationService(http, url) {
        this.http = http;
        this.url = url;
    }
    ValidationService.prototype.isValid = function (form) {
        return this.http.get(constants_1.MOCK_URL + this.url, new http_1.RequestOptions({ params: form }))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return console.error(err); });
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
var StepValidationService1 = (function (_super) {
    __extends(StepValidationService1, _super);
    function StepValidationService1(http) {
        return _super.call(this, http, constants_1.STEP_1) || this;
    }
    StepValidationService1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StepValidationService1);
    return StepValidationService1;
}(ValidationService));
exports.StepValidationService1 = StepValidationService1;
var StepValidationService2 = (function (_super) {
    __extends(StepValidationService2, _super);
    function StepValidationService2(http) {
        return _super.call(this, http, constants_1.STEP_2) || this;
    }
    StepValidationService2 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StepValidationService2);
    return StepValidationService2;
}(ValidationService));
exports.StepValidationService2 = StepValidationService2;
var StepValidationService3 = (function (_super) {
    __extends(StepValidationService3, _super);
    function StepValidationService3(http) {
        return _super.call(this, http, constants_1.STEP_3) || this;
    }
    StepValidationService3 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StepValidationService3);
    return StepValidationService3;
}(ValidationService));
exports.StepValidationService3 = StepValidationService3;
var StepValidationService4 = (function (_super) {
    __extends(StepValidationService4, _super);
    function StepValidationService4(http) {
        return _super.call(this, http, constants_1.STEP_4) || this;
    }
    StepValidationService4 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StepValidationService4);
    return StepValidationService4;
}(ValidationService));
exports.StepValidationService4 = StepValidationService4;
//# sourceMappingURL=wizard.service.js.map