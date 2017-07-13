import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {MockBackendService} from "../backend/mock-backend.service";

@Injectable()
export class ValidationService {
    constructor(private http: Http) {
    }

    isValid(form: any): Promise<string> {
        return this.http.get(MockBackendService.URL, new RequestOptions({params: form.value}))
            .toPromise()
            .then(response => response.json())
            .catch((err: any) => console.error(err));
    }
}