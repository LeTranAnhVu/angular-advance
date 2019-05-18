import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../dashboard/services/dashboard.service';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {

  constructor(
    public dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

}
