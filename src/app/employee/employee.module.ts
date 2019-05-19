import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeeManagerComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports: [EmployeeManagerComponent],
  providers: []
})
export class EmployeeModule { }
