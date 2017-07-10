import {Component} from "@angular/core";
import {MockBackendService} from "./backend/mock-backend.service";

@Component({
    selector: 'app-component',
    templateUrl: 'templates/app.html',
    providers: [MockBackendService]
})
export class AppComponent {
    constructor(private mockBackendService: MockBackendService) {
        this.mockBackendService.start();
    }
}