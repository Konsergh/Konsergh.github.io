import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requair',
  templateUrl: './requair.component.html',
  styleUrls: ['./requair.component.sass']
})
export class RequairComponent implements OnInit {

	req_title:string;
  constructor() { }

  ngOnInit() {
  	this.req_title = 'General requirements for the test task';
  }

}
