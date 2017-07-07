import {Component} from '@angular/core';
import {MainComponent} from "../util/main.component";

@Component({
    selector: 'step1-nav',
    templateUrl: 'templates/nav/step1.html'
})
export class NavComponent1 {
    constructor() { }
}

@Component({
    selector: 'step1-main',
    templateUrl: 'templates/main/step1.html'
})
export class MainComponent1 extends MainComponent{
}

@Component({
    selector: 'step1-footer',
    templateUrl: 'templates/footer/step1.html'
})
export class FooterComponent1 {
    constructor() { }
}
