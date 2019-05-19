import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

}
