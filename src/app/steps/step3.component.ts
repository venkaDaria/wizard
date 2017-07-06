import { Component } from '@angular/core';
import {MainComponent} from "../parents/main.component";

@Component({
    selector: 'step3-nav',
    templateUrl: 'templates/nav/step3.html'
})
export class NavComponent3 {
    constructor() { }
}

@Component({
    selector: 'step3-main',
    templateUrl: 'templates/main/step3.html'
})
export class MainComponent3 extends MainComponent {
}

@Component({
    selector: 'step3-footer',
    templateUrl: 'templates/footer/step3.html'
})
export class FooterComponent3 {
    constructor() { }
}
