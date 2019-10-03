import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class NavService {
constructor(private http: HttpClient){}

	user_id:number = 1;

	getNav(){
		return  navNames.slice(0);
	}
	getData(){
		return this.http.get('https://frontend-test-assignment-api.abz.agency/api/v1/users/' + this.user_id);
	}
}

const navNames = [
	{ "id": 1, "name": "About me", "href": "#about"},
	{ "id": 2, "name": "Relationships", "href": "#quanted"},
	{ "id": 3, "name": "Requirements", "href": "#requirements"},
	{ "id": 4, "name": "Users", "href": "#our_users"},
	{ "id": 5, "name": "Sign Up", "href": "#regstration"}
]