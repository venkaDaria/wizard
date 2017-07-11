import {Component} from "@angular/core";
import {BaseComponent} from "./base.component";

@Component({
    selector: 'step-nav',
    templateUrl: 'templates/page/nav.html'
})
export class NavComponent extends BaseComponent {

    urlEquals(idx: number): boolean {
        return this.router.url === this.steps[idx];
    }
}