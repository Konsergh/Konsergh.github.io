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
  	count=6;
	constructor(private userService: UserService){  }

  ngOnInit() {
  	this.userService.getData()
		.subscribe(users => {
		this.users = users["users"];
		console.log(users);
		console.log(users["links"]);		
	});
		this.count = this.userService.count;
  }
  Add(){
  	this.userService.count += this.count;
  	this.userService.setCount(this.userService.count);
  	console.log(this.userService.count);
  }
}
