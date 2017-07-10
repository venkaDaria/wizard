import {Component} from "@angular/core";
import {MainComponent} from "../page/main.component";

@Component({
    selector: 'step1-main',
    templateUrl: 'templates/step/step1.html'
})
export class MainComponent1 extends MainComponent {
}

@Component({
    selector: 'step1-footer',
    templateUrl: 'templates/footer/step1.html'
})
export class FooterComponent1 {
    constructor() {
    }
}
