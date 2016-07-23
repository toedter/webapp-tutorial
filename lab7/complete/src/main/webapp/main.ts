///<reference path="../../../../../typings/index.d.ts"/>

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {WebApp} from './app/app.component';

// enableProdMode()

bootstrap(WebApp, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]).catch(err => console.error(err));

