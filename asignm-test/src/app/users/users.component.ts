import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [UserService]
})

export class UsersComponent implements OnInit {

	user_title = 'Our cheerful users';  	
  	users;
    api_url;

	constructor(private userService: UserService){  }

  ngOnInit() {
  	this.userService.getData()
		.subscribe(users => {
		this.users = users["users"];
		// console.log(users);
    this.api_url = users["links"]['next_url'];
		// console.log(this.api_url);		
	});

  }
  Add(){
  	this.userService.setApi(this.api_url);
    this.userService.getData_new()
    .subscribe(users => {
    this.users = users["users"];
    this.api_url = users["links"]['next_url'];
  })
}}
