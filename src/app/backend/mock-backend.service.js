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
var MockBackendService = MockBackendService_1 = (function () {
    function MockBackendService(backend) {
        this.backend = backend;
    }
    MockBackendService.prototype.start = function () {
        console.log('MockBackendService start');
        this.backend.connections.subscribe(function (c) {
            console.log('mockConnection url:: ' + c.request.getBody());
            var params = JSON.parse(c.request.getBody());
            var value = params.param;
            var answer = {};
            switch (c.request.url) {
                case MockBackendService_1.url + 'param1':
                    if (value.length < 7) {
                        answer['errorMessage'] = 'Param1 must be at least 7';
                    }
                    break;
                case MockBackendService_1.url + 'param2':
                    if (value !== 'hello') {
                        answer['errorMessage'] = 'Param2 must be exactly "hello"';
                    }
                    break;
                case MockBackendService_1.url + 'param3':
                    if (value.length < 5) {
                        answer['errorMessage'] = 'Param3 must be at least 5';
                    }
                    if (!value.match('^\d+$')) {
                        answer['errorMessage'] += '\nParam3 must contain only digits';
                    }
                    break;
                case MockBackendService_1.url + 'param4':
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
    };
    return MockBackendService;
}());
MockBackendService.url = 'http://localhost:3000/api/valid';
MockBackendService = MockBackendService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [testing_1.MockBackend])
], MockBackendService);
exports.MockBackendService = MockBackendService;
var MockBackendService_1;
//# sourceMappingURL=mock-backend.service.js.map