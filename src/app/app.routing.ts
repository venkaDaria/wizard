import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NavComponent} from "./page/nav.component";
import {MainComponent} from "./page/main.component";
import {
    FinalFooterComponent,
    FooterComponent1,
    FooterComponent2,
    FooterComponent3,
    FooterComponent4
} from "./page/footer.component";
import {
    FinalMainComponent,
    MainComponent1,
    MainComponent2,
    MainComponent3,
    MainComponent4
} from "./page/step.component";

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