import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {
    constructor(private http: Http) {
    }

    public getUsers(): Observable<any> {
        let uri: string = '/api/users';

        if (!document.location.hostname || document.location.hostname === 'localhost') {
           uri = 'http://localhost:8080/api' + uri;
        }

        let observable: Observable<any> =
            this.http.get(uri)
            .map((response: Response) => response.json()._embedded['users']);

        return observable;
    }
}
