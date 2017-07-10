import {Injectable} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Response, ResponseOptions} from '@angular/http';

@Injectable()
export class MockBackendService {
    static url: string = 'http://localhost:3000/api/valid';

    constructor(private backend: MockBackend) {
    }

    start(): void {
        console.log('MockBackendService start');
        this.backend.connections.subscribe((c: MockConnection) => {
            console.log('mockConnection url:: ' + c.request.getBody());

            const params = JSON.parse(c.request.getBody());
            const value = params.param;
            let answer = {};

            switch (c.request.url) {
                case MockBackendService.url + 'param1':
                    if (value.length < 7) {
                        answer['errorMessage'] = 'Param1 must be at least 7';
                    }
                    break;
                case MockBackendService.url + 'param2':
                    if (value !== 'hello') {
                        answer['errorMessage'] = 'Param2 must be exactly "hello"';
                    }
                    break;
                case MockBackendService.url + 'param3':
                    if (value.length < 5) {
                        answer['errorMessage'] = 'Param3 must be at least 5';
                    }
                    if (!value.match('^\d+$')) {
                        answer['errorMessage'] += '\nParam3 must contain only digits';
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
}