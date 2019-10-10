import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';



export interface Users {
	name:string;
	phone:string;
	photo:string;
	position:string;
}

@Injectable()
export class UserService {

	public users: Users[] = [];

	page:number = 1;
	count = 6;
	api_url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';

	constructor(private http: HttpClient){ }
	getData():Observable<Users[]>{
        return this.http.get<Users[]>(this.api_url)
        .pipe(tap((users => this.users = users)));
    }
    setApi(api_url){
    	this.api_url = api_url;
    }
    getData_new(){
    	return this.http.get<Users[]>(this.api_url)
        .pipe(tap((users => this.users = users)));
    }
}