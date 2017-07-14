import {Component} from "@angular/core";
import {BaseComponent} from "./base.component";
import {stepStorage} from "../util/storage";

@Component({
    templateUrl: 'templates/page/nav.html'
})
export class NavComponent extends BaseComponent {

    protected stepNames: string[] = ['StepComponent1', 'StepComponent2', 'StepComponent3',
        'StepComponent4', 'FinalStepComponent'];

    urlEquals(idx: number): boolean {
        return this.router.url === this.steps[idx];
    }

    isDisabled(idx: number) {
        return idx != 0 && !this.hasValues(this.stepNames[idx - 1]);
    }

    isSuccess(stepComponent: string, idx: number) {
        return idx < this.steps.length - 1 && this.hasValues(stepComponent);
    }

    hasValues(stepComponent: string): boolean {
        let step: any = stepStorage.get(stepComponent);
        return step != undefined && step.isValidOrNot();
    }
}