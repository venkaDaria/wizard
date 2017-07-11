"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var step1_component_1 = require("./step/step1.component");
var step2_component_1 = require("./step/step2.component");
var step3_component_1 = require("./step/step3.component");
var step4_component_1 = require("./step/step4.component");
var final_component_1 = require("./step/final.component");
var nav_component_1 = require("./page/nav.component");
var main_component_1 = require("./page/main.component");
var appRoutes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    {
        path: 'step1', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, children: [
                    { path: '', component: step1_component_1.MainComponent1, pathMatch: 'full' },
                ]
            },
            { path: '', component: step1_component_1.FooterComponent1, outlet: 'footer', pathMatch: 'full' },
        ]
    },
    {
        path: 'step2', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, children: [
                    { path: '', component: step2_component_1.MainComponent2, pathMatch: 'full' },
                ]
            },
            { path: '', component: step2_component_1.FooterComponent2, outlet: 'footer', pathMatch: 'full' },
        ]
    },
    {
        path: 'step3', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, children: [
                    { path: '', component: step3_component_1.MainComponent3, pathMatch: 'full' },
                ]
            },
            { path: '', component: step3_component_1.FooterComponent3, outlet: 'footer', pathMatch: 'full' },
        ]
    },
    {
        path: 'step4', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, children: [
                    { path: '', component: step4_component_1.MainComponent4, pathMatch: 'full' },
                ]
            },
            { path: '', component: step4_component_1.FooterComponent4, outlet: 'footer', pathMatch: 'full' },
        ]
    },
    {
        path: 'final', children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, children: [
                    { path: '', component: final_component_1.FinalMainComponent, pathMatch: 'full' },
                ]
            },
            { path: '', component: final_component_1.FinalFooterComponent, outlet: 'footer', pathMatch: 'full' },
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map