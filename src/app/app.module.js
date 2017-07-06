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
var step1_component_1 = require("./steps/step1.component");
var step2_component_1 = require("./steps/step2.component");
var step3_component_1 = require("./steps/step3.component");
var step4_component_1 = require("./steps/step4.component");
var final_component_1 = require("./steps/final.component");
var appRoutes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    { path: 'step1', pathMatch: 'full', children: [
            { path: '', component: step1_component_1.MainComponent1, outlet: 'main' },
            { path: '', component: step1_component_1.NavComponent1, outlet: 'nav' },
            { path: '', component: step1_component_1.FooterComponent1, outlet: 'footer' },
        ]
    },
    { path: 'step2', pathMatch: 'full', children: [
            { path: '', component: step2_component_1.MainComponent2, outlet: 'main' },
            { path: '', component: step2_component_1.NavComponent2, outlet: 'nav' },
            { path: '', component: step2_component_1.FooterComponent2, outlet: 'footer' },
        ]
    },
    { path: 'step3', pathMatch: 'full', children: [
            { path: '', component: step3_component_1.MainComponent3, outlet: 'main' },
            { path: '', component: step3_component_1.NavComponent3, outlet: 'nav' },
            { path: '', component: step3_component_1.FooterComponent3, outlet: 'footer' },
        ]
    },
    { path: 'step4', pathMatch: 'full', children: [
            { path: '', component: step4_component_1.MainComponent4, outlet: 'main' },
            { path: '', component: step4_component_1.NavComponent4, outlet: 'nav' },
            { path: '', component: step4_component_1.FooterComponent4, outlet: 'footer' },
        ]
    },
    { path: 'final', pathMatch: 'full', children: [
            { path: '', component: final_component_1.FinalMainComponent, outlet: 'main' },
            { path: '', component: final_component_1.FinalNavComponent, outlet: 'nav' },
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
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule],
        declarations: [app_component_1.AppComponent,
            step1_component_1.NavComponent1, step1_component_1.MainComponent1, step1_component_1.FooterComponent1,
            step2_component_1.NavComponent2, step2_component_1.MainComponent2, step2_component_1.FooterComponent2,
            step3_component_1.NavComponent3, step3_component_1.MainComponent3, step3_component_1.FooterComponent3,
            step4_component_1.NavComponent4, step4_component_1.MainComponent4, step4_component_1.FooterComponent4,
            final_component_1.FinalNavComponent, final_component_1.FinalMainComponent, final_component_1.FinalFooterComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map