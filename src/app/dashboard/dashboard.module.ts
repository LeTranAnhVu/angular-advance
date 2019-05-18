import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardManagerComponent} from './dashboard-manager/dashboard-manager.component';
// import {DashboardService} from './services/dashboard.service';

@NgModule({
  declarations: [DashboardManagerComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    DashboardManagerComponent
  ]
})
export class DashboardModule { }
