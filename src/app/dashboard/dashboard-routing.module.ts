import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardManagerComponent} from './dashboard-manager/dashboard-manager.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardManagerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule {
}
