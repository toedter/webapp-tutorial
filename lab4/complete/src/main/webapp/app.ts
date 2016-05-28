///<reference path="../../../../../typings/browser.d.ts"/>

import {bootstrap} from '@angular/platform-browser-dynamic';
import {WebApp} from './app/web-app';

// enableProdMode()

bootstrap(WebApp)
.catch(err => console.error(err));

