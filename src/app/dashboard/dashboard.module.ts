import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardManagerComponent} from './dashboard-manager/dashboard-manager.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardService} from './services/dashboard.service';

@NgModule({
  declarations: [DashboardManagerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports: [
    DashboardManagerComponent,
  ]
})

// what if we provide the service in lazied module
// but this service also being used in employee module and app module
export class DashboardModule { }
