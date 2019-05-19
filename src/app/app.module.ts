import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DashboardService} from './dashboard/services/dashboard.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


