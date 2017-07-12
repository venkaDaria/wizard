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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("../util/session");
var core_1 = require("@angular/core");
var wizard_service_1 = require("../service/wizard.service");
var base_component_1 = require("./base.component");
var router_1 = require("@angular/router");
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(service, router) {
        var _this = _super.call(this, router) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    MainComponent.prototype.goNext = function (idx, value) {
        var _this = this;
        goNextAsync()
            .then(function (success) { return console.log('Go to' + _this.steps[idx]); })
            .catch(function (err) { return console.error(err); });
        function goNextAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var answer;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            session_1.Session.set('loading', true);
                            session_1.Session.remove('errorMessage');
                            return [4 /*yield*/, this.service.isValid(this.params[idx], value)];
                        case 1:
                            answer = _a.sent();
                            if (!answer['errorMessage']) return [3 /*break*/, 2];
                            session_1.Session.set('errorMessage', answer['errorMessage']);
                            return [3 /*break*/, 4];
                        case 2:
                            session_1.Session.set(this.params[idx], value);
                            return [4 /*yield*/, this.router.navigateByUrl(this.steps[idx])];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            session_1.Session.remove('loading');
                            return [2 /*return*/];
                    }
                });
            });
        }
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
    MainComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/page/main.html'
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [wizard_service_1.ValidationService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}(base_component_1.BaseComponent));
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map