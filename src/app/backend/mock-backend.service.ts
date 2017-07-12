import {Injectable} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, ResponseOptions} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class MockBackendService {
    static readonly URL: string = '/api/valid/';

    constructor(private backend: MockBackend, private router: Router) {
    }

    start(ms: number) {
        console.log('MockBackendService start');

        let router = this.router;
        this.backend.connections.subscribe(callMock);

        function delay(): Promise<any> {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function callMock(c: MockConnection) {
            await delay();

            console.log('mockConnection URL:: ' + c.request.url);

            const param = router.parseUrl(c.request.url).queryParams.param;
            let answer = {};

            switch (router.url) {
                case '/step1':
                    if (param.length < 7) {
                        answer['errorMessage'] = 'Param1 must be at least 7';
                    }
                    break;
                case '/step2':
                    if (param !== 'hello') {
                        answer['errorMessage'] = 'Param2 must be exactly "hello"';
                    }
                    break;
                case '/step3':
                    if (param.length < 5) {
                        answer['errorMessage'] = 'Param3 must be at least 5';
                    }
                    if (!param.match('^\\d+$')) {
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
        }
    }
}