import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeManagerComponent} from './employee-manager/employee-manager.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeManagerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmployeeRoutingModule {
}
