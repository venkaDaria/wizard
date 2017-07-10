import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {MockBackendService} from "../backend/mock-backend.service";

@Injectable()
export class ValidationService {
    constructor(private http: Http) {
    }

    is_valid(key: string, value: string): Promise<string> {
        return this.http.post(MockBackendService.url + key, new RequestOptions({
            params: {param: value}
        }))
            .toPromise()
            .then(response => response.json())
            .catch(this.handle_error);
    }

    private handle_error(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}