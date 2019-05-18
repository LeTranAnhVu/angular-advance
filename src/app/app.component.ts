import {Component} from '@angular/core';
import {DashboardService} from './dashboard/services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanceApp';

  constructor(
    public dashboardService: DashboardService
  ) {


  }
}
