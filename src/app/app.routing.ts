import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FooterComponent1, MainComponent1} from "./step/step1.component";
import {FooterComponent2, MainComponent2} from "./step/step2.component";
import {FooterComponent3, MainComponent3} from "./step/step3.component";
import {FooterComponent4, MainComponent4} from "./step/step4.component";
import {FinalFooterComponent, FinalMainComponent} from "./step/final.component";
import {NavComponent} from "./page/nav.component";
import {MainComponent} from "./page/main.component";
import {CanActivateTeam} from "./security/activate";

const appRoutes: Routes = [
    {path: '', redirectTo: 'step1', canActivate: [CanActivateTeam], pathMatch: 'full'},

    {path: 'step1/', redirectTo: 'step1', canActivate: [CanActivateTeam], pathMatch: 'full'},
    {path: 'step2/', redirectTo: 'step2', canActivate: [CanActivateTeam], pathMatch: 'full'},
    {path: 'step3/', redirectTo: 'step3', canActivate: [CanActivateTeam], pathMatch: 'full'},
    {path: 'step4/', redirectTo: 'step4', canActivate: [CanActivateTeam], pathMatch: 'full'},
    {path: 'final/', redirectTo: 'final', canActivate: [CanActivateTeam], pathMatch: 'full'},

    {
        path: 'step1', canActivate: [CanActivateTeam], children: [
        {path: '', component: NavComponent, outlet: 'nav', canActivate: [CanActivateTeam], pathMatch: 'full'},
        {
            path: '', component: MainComponent, outlet: 'main', canActivate: [CanActivateTeam], children: [
            {path: '', component: MainComponent1, outlet: 'step', canActivate: [CanActivateTeam], pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent1, outlet: 'footer', canActivate: [CanActivateTeam], pathMatch: 'full'},
    ]
    },


    {
        path: 'step2', canActivate: [CanActivateTeam], children: [
        {path: '', component: NavComponent, outlet: 'nav', canActivate: [CanActivateTeam], pathMatch: 'full'},
        {
            path: '', component: MainComponent, outlet: 'main', canActivate: [CanActivateTeam], children: [
            {path: '', component: MainComponent2, outlet: 'step', canActivate: [CanActivateTeam], pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent2, outlet: 'footer', canActivate: [CanActivateTeam], pathMatch: 'full'},
    ]
    },

    {
        path: 'step3', canActivate: [CanActivateTeam], children: [
        {path: '', component: NavComponent, outlet: 'nav', canActivate: [CanActivateTeam], pathMatch: 'full'},
        {
            path: '', component: MainComponent, outlet: 'main', canActivate: [CanActivateTeam], children: [
            {path: '', component: MainComponent3, outlet: 'step', canActivate: [CanActivateTeam], pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent3, outlet: 'footer', canActivate: [CanActivateTeam], pathMatch: 'full'},
    ]
    },

    {
        path: 'step4', canActivate: [CanActivateTeam], children: [
        {path: '', component: NavComponent, outlet: 'nav', canActivate: [CanActivateTeam], pathMatch: 'full'},
        {
            path: '', component: MainComponent, outlet: 'main', canActivate: [CanActivateTeam], children: [
            {path: '', component: MainComponent4, outlet: 'step', canActivate: [CanActivateTeam], pathMatch: 'full'},
        ]
        },
        {path: '', component: FooterComponent4, outlet: 'footer', canActivate: [CanActivateTeam], pathMatch: 'full'},
    ]
    },

    {
        path: 'final', canActivate: [CanActivateTeam], children: [
        {path: '', component: NavComponent, outlet: 'nav', canActivate: [CanActivateTeam], pathMatch: 'full'},
        {
            path: '', component: MainComponent, outlet: 'main', canActivate: [CanActivateTeam], children: [
            {
                path: '',
                component: FinalMainComponent,
                outlet: 'step',
                canActivate: [CanActivateTeam],
                pathMatch: 'full'
            },
        ]
        },
        {
            path: '',
            component: FinalFooterComponent,
            outlet: 'footer',
            canActivate: [CanActivateTeam],
            pathMatch: 'full'
        },
    ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);