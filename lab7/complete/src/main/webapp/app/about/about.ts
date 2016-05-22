import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'about',
  templateUrl: 'app/about/about.html',
  styleUrls: ['app/about/about.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class About {

  constructor(http: Http) {

  }
}
