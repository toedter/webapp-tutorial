import { provideRouter, RouterConfig } from '@angular/router';

import {UsersComponent} from "./user/users-component";
import {About} from "./about/about";

const routes: RouterConfig = [
    { path: '', redirectTo: 'users', terminal: true },
    { path: 'users', component: UsersComponent },
    { path: 'about', component: About }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];