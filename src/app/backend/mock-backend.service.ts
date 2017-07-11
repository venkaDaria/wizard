import {Injectable} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, ResponseOptions} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class MockBackendService {
    static url: string = '/api/valid/';

    constructor(private backend: MockBackend, private router: Router) {
    }

    private delay(ms: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    start(ms: number): void {
        console.log('MockBackendService start');
        this.backend.connections.subscribe((c: MockConnection) => {
            this.delay(ms).then(() => {
                console.log('mockConnection url:: ' + c.request.url);

                const parsedUrl = this.router.parseUrl(c.request.url).queryParams;
                let answer = {};

                switch (this.router.url) {
                    case '/step1':
                        if (parsedUrl.param.length < 7) {
                            answer['errorMessage'] = 'Param1 must be at least 7';
                        }
                        break;
                    case '/step2':
                        if (parsedUrl.param !== 'hello') {
                            answer['errorMessage'] = 'Param2 must be exactly "hello"';
                        }
                        break;
                    case '/step3':
                        if (parsedUrl.param.length < 5) {
                            answer['errorMessage'] = 'Param3 must be at least 5';
                        }
                        if (!parsedUrl.param.match('^\\d+$')) {
                            let msg = 'Param3 must contain only digits';
                            answer['errorMessage'] = !answer['errorMessage'] ? msg : answer['errorMessage'] + '. ' + msg;
                        }
                        break;
                    case '/step4':
                        break;
                    default:
                        answer['errorMessage'] = 'Request is incorrect';
                        break;
                }

                console.log(JSON.stringify(answer));

                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(answer)
                })));
            })
        });
    }
}