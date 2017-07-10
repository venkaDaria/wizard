import {Component} from "@angular/core";
import {MainComponent} from "../page/main.component";

@Component({
    selector: 'final-main',
    templateUrl: 'templates/step/final.html'
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
