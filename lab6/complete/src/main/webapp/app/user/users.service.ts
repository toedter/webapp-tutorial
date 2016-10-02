import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UsersService {
    public getUsers(): User[] {
        return [
            new User('toedter_k', 'Kai Toedter', 'kai@toedter.com'),
            new User('doe_jo', 'John Doe', 'john@doe.com'),
            new User('doe_ja', 'Jane Doe', 'jane@doe.com')
        ];
    }
}
