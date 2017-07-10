"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
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
var appRoutes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    {
        path: 'step1', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', children: [
                    { path: '', component: step1_component_1.MainComponent1, outlet: 'step' },
                ]
            },
            { path: '', component: step1_component_1.FooterComponent1, outlet: 'footer' },
        ]
    },
    {
        path: 'step2', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', children: [
                    { path: '', component: step2_component_1.MainComponent2, outlet: 'step' },
                ]
            },
            { path: '', component: step2_component_1.FooterComponent2, outlet: 'footer' },
        ]
    },
    {
        path: 'step3', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', children: [
                    { path: '', component: step3_component_1.MainComponent3, outlet: 'step' },
                ]
            },
            { path: '', component: step3_component_1.FooterComponent3, outlet: 'footer' },
        ]
    },
    {
        path: 'step4', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', children: [
                    { path: '', component: step4_component_1.MainComponent4, outlet: 'step' },
                ]
            },
            { path: '', component: step4_component_1.FooterComponent4, outlet: 'footer' },
        ]
    },
    {
        path: 'final', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', children: [
                    { path: '', component: final_component_1.FinalMainComponent, outlet: 'step' },
                ]
            },
            { path: '', component: final_component_1.FinalFooterComponent, outlet: 'footer' },
        ]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, main_component_1.MainComponent, step1_component_1.MainComponent1, step1_component_1.FooterComponent1,
            step2_component_1.MainComponent2, step2_component_1.FooterComponent2, step3_component_1.MainComponent3, step3_component_1.FooterComponent3,
            step4_component_1.MainComponent4, step4_component_1.FooterComponent4, final_component_1.FinalMainComponent, final_component_1.FinalFooterComponent
        ],
        providers: [
            wizard_service_1.ValidationService,
            testing_1.MockBackend,
            http_1.BaseRequestOptions,
            {
                provide: http_1.Http,
                deps: [testing_1.MockBackend, http_1.BaseRequestOptions],
                useFactory: function (backend, options) { return new http_1.Http(backend, options); }
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map