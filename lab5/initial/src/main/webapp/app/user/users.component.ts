import {Component} from '@angular/core';
import {User} from './user';
import {UsersService} from './users.service';


@Component({
    selector: 'chat-messages',
    templateUrl: 'app/user/users.component.html',
    viewProviders: [UsersService],
})
export class UsersComponent {
    private users: User[];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.users = this.usersService.getUsers();
    }
}
