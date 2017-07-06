import { Component } from '@angular/core';
import {MainComponent} from "../parents/main.component";

@Component({
    selector: 'step4-nav',
    templateUrl: 'templates/nav/step4.html'
})
export class NavComponent4 {
    constructor() { }
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
