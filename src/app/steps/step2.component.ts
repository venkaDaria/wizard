import { Component } from '@angular/core';
import {MainComponent} from "../parents/main.component";

@Component({
    selector: 'step2-nav',
    templateUrl: 'templates/nav/step2.html'
})
export class NavComponent2 {
    constructor() { }
}

@Component({
    selector: 'step2-main',
    templateUrl: 'templates/main/step2.html'
})
export class MainComponent2 extends MainComponent {
}

@Component({
    selector: 'step2-footer',
    templateUrl: 'templates/footer/step2.html'
})
export class FooterComponent2 {
    constructor() { }
}
