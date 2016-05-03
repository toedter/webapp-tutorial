///<reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {UsersComponent} from './user/UsersComponent';

@Component({
    selector: 'chatty',
    templateUrl: 'app/ChattyComponent.html',
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    {path: '/users', name: 'Users', component: UsersComponent},
])
export class ChattyComponent {
}
