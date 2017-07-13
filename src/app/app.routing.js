"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var router_1 = require("@angular/router");
var nav_component_1 = require("./page/nav.component");
var main_component_1 = require("./page/main.component");
var footer_component_1 = require("./page/footer.component");
var step_component_1 = require("./page/step.component");
var appRoutes = [
    {path: '', redirectTo: 'step1', pathMatch: 'full'},
    {
        path: 'step1', children: [
        {path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: main_component_1.MainComponent, children: [
            {path: '', component: step_component_1.MainComponent1, pathMatch: 'full'},
        ]
        },
        {path: '', component: footer_component_1.FooterComponent1, outlet: 'footer', pathMatch: 'full'},
    ]
    },
    {
        path: 'step2', children: [
        {path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: main_component_1.MainComponent, children: [
            {path: '', component: step_component_1.MainComponent2, pathMatch: 'full'},
        ]
        },
        {path: '', component: footer_component_1.FooterComponent2, outlet: 'footer', pathMatch: 'full'},
    ]
    },
    {
        path: 'step3', children: [
        {path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: main_component_1.MainComponent, children: [
            {path: '', component: step_component_1.MainComponent3, pathMatch: 'full'},
        ]
        },
        {path: '', component: footer_component_1.FooterComponent3, outlet: 'footer', pathMatch: 'full'},
    ]
    },
    {
        path: 'step4', children: [
        {path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: main_component_1.MainComponent, children: [
            {path: '', component: step_component_1.MainComponent4, pathMatch: 'full'},
        ]
        },
        {path: '', component: footer_component_1.FooterComponent4, outlet: 'footer', pathMatch: 'full'},
    ]
    },
    {
        path: 'final', children: [
        {path: '', component: nav_component_1.NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: main_component_1.MainComponent, children: [
            {path: '', component: step_component_1.FinalMainComponent, pathMatch: 'full'},
        ]
        },
        {path: '', component: footer_component_1.FinalFooterComponent, outlet: 'footer', pathMatch: 'full'},
    ]
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map