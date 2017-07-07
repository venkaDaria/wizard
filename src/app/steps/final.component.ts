import { Component } from '@angular/core';
import {MainComponent} from "../util/main.component";

@Component({
    selector: 'final-nav',
    templateUrl: 'templates/nav/final.html'
})
export class FinalNavComponent {
    constructor() { }
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
