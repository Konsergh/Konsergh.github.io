import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';  


export interface Position {
	name:string;
}
@Injectable()
export class PositionService{

    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
    }
}