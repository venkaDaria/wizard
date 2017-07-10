import {Component} from "@angular/core";
import {MainComponent} from "../page/main.component";

@Component({
    selector: 'step2-main',
    templateUrl: 'templates/step/step2.html'
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
