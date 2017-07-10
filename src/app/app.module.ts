import { NgModule }      from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainComponent1, FooterComponent1 }  from './steps/step1.component';
import { MainComponent2, FooterComponent2 }  from './steps/step2.component';
import { MainComponent3, FooterComponent3 }  from './steps/step3.component';
import { MainComponent4, FooterComponent4 }  from './steps/step4.component';
import { FinalMainComponent, FinalFooterComponent }  from './steps/final.component';
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./util/nav.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full'},

    { path: 'step1', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent1, outlet: 'main' },
        { path: '', component: FooterComponent1, outlet: 'footer' },
    ]
    },

    { path: 'step2', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent2, outlet: 'main' },
        { path: '', component: FooterComponent2, outlet: 'footer' },
    ]
    },

    { path: 'step3', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent3, outlet: 'main' },
        { path: '', component: FooterComponent3, outlet: 'footer' },
    ]
    },

    { path: 'step4', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: MainComponent4, outlet: 'main' },
        { path: '', component: FooterComponent4, outlet: 'footer' },
    ]
    },

    { path: 'final', children: [
        { path: '', component: NavComponent, outlet: 'nav' },
        { path: '', component: FinalMainComponent, outlet: 'main' },
        { path: '', component: FinalFooterComponent, outlet: 'footer' },
    ]
    },
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    declarations: [ AppComponent, NavComponent, MainComponent1, FooterComponent1,
        MainComponent2, FooterComponent2, MainComponent3, FooterComponent3,
        MainComponent4, FooterComponent4, FinalMainComponent, FinalFooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }