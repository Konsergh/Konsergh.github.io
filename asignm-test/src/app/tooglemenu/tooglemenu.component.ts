import { Component, OnInit } from '@angular/core';
import { NavService } from '../shared/nav.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tooglemenu',
  templateUrl: './tooglemenu.component.html',
  styleUrls: ['./tooglemenu.component.sass']
})
export class TooglemenuComponent implements OnInit {

  names: any = [];
 
  response:any;

  constructor(private navService: NavService) { 
  	  
  }
  ngOnInit() {
    this.names = this.navService.getNav();  

    this.navService.getData()
    .subscribe((response)=>{
      this.response = response;
    })
  }

}
