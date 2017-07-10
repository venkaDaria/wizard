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
var activate_1 = require("./security/activate");
var appRoutes = [
    { path: '', redirectTo: 'step1', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
    {
        path: 'step1', canActivate: [activate_1.CanActivateTeam], children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', canActivate: [activate_1.CanActivateTeam], children: [
                    { path: '', component: step1_component_1.MainComponent1, outlet: 'step', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
                ]
            },
            { path: '', component: step1_component_1.FooterComponent1, outlet: 'footer', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
        ]
    },
    {
        path: 'step2', canActivate: [activate_1.CanActivateTeam], children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', canActivate: [activate_1.CanActivateTeam], children: [
                    { path: '', component: step2_component_1.MainComponent2, outlet: 'step', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
                ]
            },
            { path: '', component: step2_component_1.FooterComponent2, outlet: 'footer', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
        ]
    },
    {
        path: 'step3', canActivate: [activate_1.CanActivateTeam], children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', canActivate: [activate_1.CanActivateTeam], children: [
                    { path: '', component: step3_component_1.MainComponent3, outlet: 'step', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
                ]
            },
            { path: '', component: step3_component_1.FooterComponent3, outlet: 'footer', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
        ]
    },
    {
        path: 'step4', canActivate: [activate_1.CanActivateTeam], children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', canActivate: [activate_1.CanActivateTeam], children: [
                    { path: '', component: step4_component_1.MainComponent4, outlet: 'step', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
                ]
            },
            { path: '', component: step4_component_1.FooterComponent4, outlet: 'footer', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
        ]
    },
    {
        path: 'final', canActivate: [activate_1.CanActivateTeam], children: [
            { path: '', component: nav_component_1.NavComponent, outlet: 'nav', canActivate: [activate_1.CanActivateTeam], pathMatch: 'full' },
            {
                path: '', component: main_component_1.MainComponent, outlet: 'main', canActivate: [activate_1.CanActivateTeam], children: [
                    {
                        path: '',
                        component: final_component_1.FinalMainComponent,
                        outlet: 'step',
                        canActivate: [activate_1.CanActivateTeam],
                        pathMatch: 'full'
                    },
                ]
            },
            {
                path: '',
                component: final_component_1.FinalFooterComponent,
                outlet: 'footer',
                canActivate: [activate_1.CanActivateTeam],
                pathMatch: 'full'
            },
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map