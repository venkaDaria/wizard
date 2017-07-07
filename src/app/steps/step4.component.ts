import { Component } from '@angular/core';
import {MainComponent} from "../util/main.component";
import {NavComponent} from "../util/nav.component";

@Component({
    selector: 'step4-nav',
    templateUrl: 'templates/nav/step4.html'
})
export class NavComponent4 extends NavComponent {
}

@Component({
    selector: 'step4-main',
    templateUrl: 'templates/main/step4.html'
})
export class MainComponent4 extends MainComponent {
}

@Component({
    selector: 'step4-footer',
    templateUrl: 'templates/footer/step4.html'
})
export class FooterComponent4 {
    constructor() { }
}
