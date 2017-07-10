import { Component } from '@angular/core';
import {MainComponent} from "../util/main.component";
import {NavComponent} from "../util/nav.component";

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
