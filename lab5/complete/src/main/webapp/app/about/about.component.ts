import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

  constructor(http: Http) {
  }
}
