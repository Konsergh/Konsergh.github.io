import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PositionService } from '../shared/posittion.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
  providers: [PositionService]
})


export class RegistrationComponent implements OnInit {

	positions:Position[];
	reg_title = 'Register to get a work';
  constructor(private positionService: PositionService) {  }

  ngOnInit() {
	this.positionService.getData().subscribe( positions => {
		this.positions = positions["positions"];
	});
  }
}

