import { NgModule }      from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavComponent1, MainComponent1, FooterComponent1 }  from './steps/step1.component';
import { NavComponent2, MainComponent2, FooterComponent2 }  from './steps/step2.component';
import { NavComponent3, MainComponent3, FooterComponent3 }  from './steps/step3.component';
import { NavComponent4, MainComponent4, FooterComponent4 }  from './steps/step4.component';
import { FinalNavComponent, FinalMainComponent, FinalFooterComponent }  from './steps/final.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full'},

    { path: 'step1', children: [
        { path: '', component: MainComponent1, outlet: 'main' },
        { path: '', component: NavComponent1, outlet: 'nav' },
        { path: '', component: FooterComponent1, outlet: 'footer' },
    ]
    },

    { path: 'step2', children: [
        { path: '', component: MainComponent2, outlet: 'main' },
        { path: '', component: NavComponent2, outlet: 'nav' },
        { path: '', component: FooterComponent2, outlet: 'footer' },
    ]
    },

    { path: 'step3', children: [
        { path: '', component: MainComponent3, outlet: 'main' },
        { path: '', component: NavComponent3, outlet: 'nav' },
        { path: '', component: FooterComponent3, outlet: 'footer' },
    ]
    },

    { path: 'step4', children: [
        { path: '', component: MainComponent4, outlet: 'main' },
        { path: '', component: NavComponent4, outlet: 'nav' },
        { path: '', component: FooterComponent4, outlet: 'footer' },
    ]
    },

    { path: 'final',  children: [
        { path: '', component: FinalMainComponent, outlet: 'main' },
        { path: '', component: FinalNavComponent, outlet: 'nav' },
        { path: '', component: FinalFooterComponent, outlet: 'footer' },
    ]
    },
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    declarations: [ AppComponent,
        NavComponent1, MainComponent1, FooterComponent1,
        NavComponent2, MainComponent2, FooterComponent2,
        NavComponent3, MainComponent3, FooterComponent3,
        NavComponent4, MainComponent4, FooterComponent4,
        FinalNavComponent, FinalMainComponent, FinalFooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }