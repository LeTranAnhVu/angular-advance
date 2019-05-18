import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {

  constructor(
    public dashboardService: DashboardService
  ) {
    this.dashboardService.setData('dirty');
  }

  ngOnInit() {
  }

}
