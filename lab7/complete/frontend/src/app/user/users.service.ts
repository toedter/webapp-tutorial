import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from './user';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {
    }

    public getUsers(): Observable<User[]> {
        const uri = '/api/users';

        return this.http.get(uri).pipe(
            map((response: any) => response._embedded['users']),
            catchError(this.handleError));
    }

    private handleError(error: any) {
        const errMsg = 'UsersService: cannot get users from http server.';
        console.error(errMsg); // log to console instead
        return throwError(errMsg);
    }
}
