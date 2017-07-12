"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var step1_component_1 = require("./step/step1.component");
var step2_component_1 = require("./step/step2.component");
var step3_component_1 = require("./step/step3.component");
var step4_component_1 = require("./step/step4.component");
var final_component_1 = require("./step/final.component");
var nav_component_1 = require("./page/nav.component");
var main_component_1 = require("./page/main.component");
var testing_1 = require("@angular/http/testing");
var wizard_service_1 = require("./service/wizard.service");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var mock_backend_service_1 = require("./backend/mock-backend.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, main_component_1.MainComponent, step1_component_1.MainComponent1, step1_component_1.FooterComponent1,
                step2_component_1.MainComponent2, step2_component_1.FooterComponent2, step3_component_1.MainComponent3, step3_component_1.FooterComponent3,
                step4_component_1.MainComponent4, step4_component_1.FooterComponent4, final_component_1.FinalMainComponent, final_component_1.FinalFooterComponent
            ],
            providers: [
                wizard_service_1.ValidationService,
                mock_backend_service_1.MockBackendService,
                testing_1.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    deps: [testing_1.MockBackend, http_1.BaseRequestOptions],
                    useFactory: function (backend, options) {
                        return new http_1.Http(backend, options);
                    }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map