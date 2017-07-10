import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {FooterComponent1, MainComponent1} from "./step/step1.component";
import {FooterComponent2, MainComponent2} from "./step/step2.component";
import {FooterComponent3, MainComponent3} from "./step/step3.component";
import {FooterComponent4, MainComponent4} from "./step/step4.component";
import {FinalFooterComponent, FinalMainComponent} from "./step/final.component";
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./page/nav.component";
import {MainComponent} from "./page/main.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full'},

    { path: 'step1', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent, outlet: 'main', children: [
            {path: '', component: MainComponent1, outlet: 'step' },
        ]},
        { path: '', component: FooterComponent1, outlet: 'footer' },
    ]
    },

    { path: 'step2', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent, outlet: 'main', children: [
            {path: '', component: MainComponent2, outlet: 'step' },
        ]},
        { path: '', component: FooterComponent2, outlet: 'footer' },
    ]
    },

    { path: 'step3', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent, outlet: 'main', children: [
            {path: '', component: MainComponent3, outlet: 'step' },
        ]},
        { path: '', component: FooterComponent3, outlet: 'footer' },
    ]
    },

    { path: 'step4', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent, outlet: 'main', children: [
            {path: '', component: MainComponent4, outlet: 'step' },
        ]},
        { path: '', component: FooterComponent4, outlet: 'footer' },
    ]
    },

    { path: 'final', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent, outlet: 'main', children: [
            {path: '', component: FinalMainComponent, outlet: 'step' },
        ]},
        { path: '', component: FinalFooterComponent, outlet: 'footer' },
    ]
    },
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    declarations: [ AppComponent, NavComponent, MainComponent, MainComponent1, FooterComponent1,
        MainComponent2, FooterComponent2, MainComponent3, FooterComponent3,
        MainComponent4, FooterComponent4, FinalMainComponent, FinalFooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }