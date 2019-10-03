import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



export interface Users {
	name:string;
}

@Injectable()
export class UserService {

	page:number = 1;
	count = 6;

	constructor(private http: HttpClient){ }
	getData(){
        return this.http.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page='+this.page+'&count='+this.count);
    }
    setCount(count){
    	this.count = count;
    }
}