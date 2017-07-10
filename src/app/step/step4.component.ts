import {Component} from "@angular/core";
import {MainComponent} from "../page/main.component";

@Component({
    selector: 'step4-main',
    templateUrl: 'templates/step/step4.html'
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
