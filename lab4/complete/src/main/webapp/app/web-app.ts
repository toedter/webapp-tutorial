import {Component} from '@angular/core';

@Component({
    selector: 'web-app',
    templateUrl: 'app/web-app.html',
})
export class WebApp {
    private hello: string;

    ngOnInit() {
        this.hello = "Hello, Angular2!";
    }

}
