import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routerConfig} from './app.routes';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './user/users.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
    declarations: [AppComponent, AboutComponent, UsersComponent],
    imports     : [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routerConfig)],
    providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
