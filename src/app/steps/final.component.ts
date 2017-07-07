import { Component } from '@angular/core';
import {MainComponent} from "../util/main.component";
import {NavComponent} from "../util/nav.component";

@Component({
    selector: 'final-nav',
    templateUrl: 'templates/nav/final.html'
})
export class FinalNavComponent extends NavComponent {
}

@Component({
    selector: 'final-main',
    templateUrl: 'templates/main/final.html'
})
export class FinalMainComponent extends MainComponent {
}

@Component({
    selector: 'final-footer',
    templateUrl: 'templates/footer/final.html'
})
export class FinalFooterComponent {
    constructor() { }
}
