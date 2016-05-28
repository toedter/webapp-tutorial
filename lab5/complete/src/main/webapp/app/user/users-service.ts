import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class UsersService {
    constructor(private http: Http) {
    }

    public getUsers(): User[] {

        return [
            new User('toedter_k', 'Kai Toedter', 'kai@toedter.com'),
            new User('doe_jo', 'John Doe', 'john@doe.com'),
            new User('doe_ja', 'Jane Doe', 'jane@doe.com')
        ];
    }
}
