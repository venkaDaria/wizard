import {Injectable} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, ResponseOptions} from "@angular/http";

@Injectable()
export class MockBackendService {
    static url: string = 'http://localhost:3000/api/valid/';

    constructor(private backend: MockBackend) {
    }

    start(): void {
        console.log('MockBackendService start');
        this.backend.connections.subscribe((c: MockConnection) => {
            console.log('mockConnection url:: ' + c.request.url);

            const parsedUrl = MockBackendService.parse(c.request.url);
            let answer = {};

            switch (parsedUrl.url) {
                case MockBackendService.url + 'param1':
                    if (parsedUrl.param.length < 7) {
                        answer['errorMessage'] = 'Param1 must be at least 7';
                    }
                    break;
                case MockBackendService.url + 'param2':
                    if (parsedUrl.param !== 'hello') {
                        answer['errorMessage'] = 'Param2 must be exactly "hello"';
                    }
                    break;
                case MockBackendService.url + 'param3':
                    if (parsedUrl.param.length < 5) {
                        answer['errorMessage'] = 'Param3 must be at least 5';
                    }
                    console.log()
                    if (!parsedUrl.param.match('^\\d+$')) {
                        let msg = 'Param3 must contain only digits';
                        answer['errorMessage'] = !answer['errorMessage'] ? msg : answer['errorMessage'] + '. ' + msg;
                    }
                    break;
                case MockBackendService.url + 'param4':
                    break;
                default:
                    answer['errorMessage'] = 'Request is incorrect';
                    break;
            }

            console.log(JSON.stringify(answer));

            c.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(answer)
            })));
        });
    }

    private static parse(url: String): any {
        return {
            url: url.split('?')[0],
            param: url.split('?')[1].split('=')[1]
        };
    }
}