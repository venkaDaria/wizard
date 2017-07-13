import {Injectable} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, ResponseOptions} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class MockBackendService {
    static readonly URL: string = '/api/valid';

    constructor(private backend: MockBackend, private router: Router) {
    }

    start(ms: number) {
        console.log('MockBackendService start');

        let router = this.router;
        this.backend.connections.subscribe(callMock);

        function delay(): Promise<any> {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function addErrorMessage(answer: {}, msg: string) {
            answer['errorMessage'] = !answer['errorMessage'] ? msg : answer['errorMessage'] + '. ' + msg;
        }

        async function callMock(c: MockConnection) {
            await delay();

            console.log('mockConnection URL:: ' + c.request.url);

            const params = router.parseUrl(c.request.url).queryParams;
            let answer = {};

            switch (router.url) {
                case '/step1':
                    if (params.param1a.length < 7) {
                        addErrorMessage(answer, 'Param1a must be at least 7');
                    }
                    if (params.param1b.length < 6) {
                        addErrorMessage(answer, 'Param1b must be at least 6');
                    }
                    break;
                case '/step2':
                    if (params.param2 !== 'hello') {
                        addErrorMessage(answer, 'Param2 must be exactly "hello"');
                    }
                    break;
                case '/step3':
                    if (params.param3.length < 5) {
                        addErrorMessage(answer, 'Param3 must be at least 5');
                    }
                    if (!params.param3.match('^\\d+$')) {
                        addErrorMessage(answer, 'Param3 must contain only digits');
                    }
                    break;
                case '/step4':
                    break;
                default:
                    addErrorMessage(answer, 'Request is incorrect');
                    break;
            }

            console.log(JSON.stringify(answer));

            c.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(answer)
            })));
        }
    }
}