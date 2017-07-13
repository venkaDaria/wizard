import {Component} from "@angular/core";
import {MainComponent} from "./main.component";
@Component({
    templateUrl: 'templates/step/step1.html'
})
export class MainComponent1 extends MainComponent {
}

@Component({
    templateUrl: 'templates/step/step2.html'
})
export class MainComponent2 extends MainComponent {
}

@Component({
    templateUrl: 'templates/step/step3.html'
})
export class MainComponent3 extends MainComponent {
}

@Component({
    templateUrl: 'templates/step/step4.html'
})
export class MainComponent4 extends MainComponent {
}

@Component({
    templateUrl: 'templates/step/final.html'
})
export class FinalMainComponent extends MainComponent {
}