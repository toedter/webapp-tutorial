import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class About {

  constructor(http: Http) {
  }
}
