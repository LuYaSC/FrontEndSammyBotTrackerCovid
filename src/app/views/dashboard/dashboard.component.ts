import { Component, OnInit } from '@angular/core';
import { Constants } from '../../services/shared/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constants: Constants = new Constants();
  countrySelected = 1;

  constructor() {
  }
  ngOnInit() {
  }

}
