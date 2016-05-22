import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {
    constructor(private http: Http) {
    }

    public getUsers(): Observable<any> {
        let uri: string = '/users';

        if (!document.location.hostname || document.location.hostname === 'localhost') {
           uri = 'http://localhost:8080' + uri;
        }

        let observable: Observable<any> =
            this.http.get(uri)
            .map((response: Response) => response.json()._embedded['users']);

        return observable;
    }
}
