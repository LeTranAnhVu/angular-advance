import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import {DashboardService} from '../dashboard/services/dashboard.service';

@NgModule({
  declarations: [EmployeeManagerComponent],
  imports: [
    CommonModule
  ],
  exports: [EmployeeManagerComponent],
  providers: [DashboardService]
})
export class EmployeeModule { }
