import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {UsersComponent} from "./user/users-component";
import {About} from "./about/about";

@Component({
    selector: 'web-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/web-app.html',
})
@RouteConfig([
    {path: '/about', component: About, name: 'About', useAsDefault: true},
    {path: '/users', component: UsersComponent, name: 'Users'},
])
export class WebApp {
}
