import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {MockBackendService} from "../backend/mock-backend.service";

@Injectable()
export class ValidationService {
    constructor(private http: Http) {
    }

    isValid(key: string, form: any): Promise<string> {
        let value = form[key].value;

        return this.http.get(MockBackendService.URL + key, new RequestOptions({params: {param: value}}))
            .toPromise()
            .then(response => response.json())
            .catch((err: any) => console.error(err));
    }
}