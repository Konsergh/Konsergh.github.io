import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

	about_title:string;
  constructor() { }

  ngOnInit() {
  	this.about_title = 'About my relationships with web-development';
  }

}
