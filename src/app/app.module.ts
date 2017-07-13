import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {NavComponent} from "./page/nav.component";
import {MainComponent} from "./page/main.component";
import {MockBackend} from "@angular/http/testing";
import {ValidationService} from "./service/wizard.service";
import {BaseRequestOptions, Http} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./app.routing";
import {MockBackendService} from "./backend/mock-backend.service";
import {
    FinalMainComponent,
    MainComponent1,
    MainComponent2,
    MainComponent3,
    MainComponent4
} from "./page/step.component";
import {
    FinalFooterComponent,
    FooterComponent1,
    FooterComponent2,
    FooterComponent3,
    FooterComponent4
} from "./page/footer.component";

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, NavComponent, MainComponent, MainComponent1, FooterComponent1,
        MainComponent2, FooterComponent2, MainComponent3, FooterComponent3,
        MainComponent4, FooterComponent4, FinalMainComponent, FinalFooterComponent
    ],
    providers: [
        ValidationService,
        MockBackendService,
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