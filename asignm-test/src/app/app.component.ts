import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
 ngOnInit(){
 	 $(document).ready(function($) {
    $('.menu-line').on('click', function(event) {
        event.preventDefault();
        $('.menu-nav').animate({
            left: 0
        }, 200);
        $('.dark-block').show();
    });
    $('.dark-block').on('click', function(event) {
        event.preventDefault();
        $('.menu-nav').animate({
            left: '-300px'
        }, 200);
        $('.dark-block').hide();
    });
});
 }
}
