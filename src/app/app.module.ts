import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {FooterComponent1, MainComponent1} from "./step/step1.component";
import {FooterComponent2, MainComponent2} from "./step/step2.component";
import {FooterComponent3, MainComponent3} from "./step/step3.component";
import {FooterComponent4, MainComponent4} from "./step/step4.component";
import {FinalFooterComponent, FinalMainComponent} from "./step/final.component";
import {NavComponent} from "./page/nav.component";
import {MainComponent} from "./page/main.component";
import {MockBackend} from "@angular/http/testing";
import {ValidationService} from "./service/wizard.service";
import {BaseRequestOptions, Http, HttpModule} from "@angular/http";
import {CanActivateTeam, Permissions, UserToken} from "./security/activate";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./app.routing";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    exports: [RouterModule],
    declarations: [AppComponent, NavComponent, MainComponent, MainComponent1, FooterComponent1,
        MainComponent2, FooterComponent2, MainComponent3, FooterComponent3,
        MainComponent4, FooterComponent4, FinalMainComponent, FinalFooterComponent
    ],
    providers: [
        CanActivateTeam,
        UserToken,
        Permissions,
        ValidationService,
        MockBackend,
        BaseRequestOptions,
        {
            provide: Http,
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
                return new Http(backend, options);
            }
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}