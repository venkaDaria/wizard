import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FooterComponent1, MainComponent1} from "./step/step1.component";
import {FooterComponent2, MainComponent2} from "./step/step2.component";
import {FooterComponent3, MainComponent3} from "./step/step3.component";
import {FooterComponent4, MainComponent4} from "./step/step4.component";
import {FinalFooterComponent, FinalMainComponent} from "./step/final.component";
import {NavComponent} from "./page/nav.component";
import {MainComponent} from "./page/main.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'step1', pathMatch: 'full'},

    {
        path: 'step1', children: [
        {path: '', component: NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: MainComponent, children: [
            {path: '', component: MainComponent1, pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent1, outlet: 'footer', pathMatch: 'full'},
    ]
    },
    
    {
        path: 'step2', children: [
        {path: '', component: NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: MainComponent, children: [
            {path: '', component: MainComponent2, pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent2, outlet: 'footer', pathMatch: 'full'},
    ]
    },

    {
        path: 'step3', children: [
        {path: '', component: NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: MainComponent, children: [
            {path: '', component: MainComponent3, pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent3, outlet: 'footer', pathMatch: 'full'},
    ]
    },

    {
        path: 'step4', children: [
        {path: '', component: NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: MainComponent, children: [
            {path: '', component: MainComponent4, pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent4, outlet: 'footer', pathMatch: 'full'},
    ]
    },

    {
        path: 'final', children: [
        {path: '', component: NavComponent, outlet: 'nav', pathMatch: 'full'},
        {
            path: '', component: MainComponent, children: [
            {path: '', component: FinalMainComponent, pathMatch: 'full'},
        ]
        },
        {path: '', component: FinalFooterComponent, outlet: 'footer', pathMatch: 'full'},
    ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);