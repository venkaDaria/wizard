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
var core_1 = require("@angular/core");
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var MockBackendService = (function () {
    function MockBackendService(backend, router) {
        this.backend = backend;
        this.router = router;
    }
    MockBackendService.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    MockBackendService.prototype.start = function (ms) {
        var _this = this;
        console.log('MockBackendService start');
        this.backend.connections.subscribe(function (c) {
            _this.delay(ms).then(function () {
                console.log('mockConnection url:: ' + c.request.url);
                var parsedUrl = _this.router.parseUrl(c.request.url).queryParams;
                var answer = {};
                switch (_this.router.url) {
                    case '/step1':
                        if (parsedUrl.param.length < 7) {
                            answer['errorMessage'] = 'Param1 must be at least 7';
                        }
                        break;
                    case '/step2':
                        if (parsedUrl.param !== 'hello') {
                            answer['errorMessage'] = 'Param2 must be exactly "hello"';
                        }
                        break;
                    case '/step3':
                        if (parsedUrl.param.length < 5) {
                            answer['errorMessage'] = 'Param3 must be at least 5';
                        }
                        if (!parsedUrl.param.match('^\\d+$')) {
                            var msg = 'Param3 must contain only digits';
                            answer['errorMessage'] = !answer['errorMessage'] ? msg : answer['errorMessage'] + '. ' + msg;
                        }
                        break;
                    case '/step4':
                        break;
                    default:
                        answer['errorMessage'] = 'Request is incorrect';
                        break;
                }
                console.log(JSON.stringify(answer));
                c.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(answer)
                })));
            });
        });
    };
    return MockBackendService;
}());
MockBackendService.url = '/api/valid/';
MockBackendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [testing_1.MockBackend, router_1.Router])
], MockBackendService);
exports.MockBackendService = MockBackendService;
//# sourceMappingURL=mock-backend.service.js.map