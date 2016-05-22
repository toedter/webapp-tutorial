import {Component} from 'angular2/core';
import {User} from './user';
import {UsersService} from './users-service';


@Component({
    selector: 'chat-messages',
    templateUrl: 'app/user/users-component.html',
    viewBindings: [UsersService],
})
export class UsersComponent {
    private users: User[];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe((users: User[]) => this.users = users);
    }
}
