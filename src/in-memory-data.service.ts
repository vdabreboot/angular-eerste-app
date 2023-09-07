import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Land } from './app/model/land';
import { Observable } from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
    //createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    createDb() {
        const landen: Land[] = [
            { id: 11, name: 'België', inwoners: 11409 },
            { id: 12, name: 'Nederland', inwoners: 17017 },
            { id: 13, name: 'Engeland', inwoners: 65014 },
            { id: 14, name: 'Ierland', inwoners: 4952 },
            { id: 15, name: 'Frankrijk', inwoners: 66836 },
            { id: 16, name: 'Spanje', inwoners: 48563 },
            { id: 17, name: 'Portugal', inwoners: 10834 },
            { id: 18, name: 'Italië', inwoners: 62008 },
            { id: 19, name: 'Zwitserland', inwoners: 8287 },
            { id: 20, name: 'Duitsland', inwoners: 80723 }
        ];
        return { landen };
    }
}

