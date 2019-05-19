import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/map.component';
import { LocationChoosePopupComponent } from './location-choose-popup/location-choose-popup.component';

@NgModule({
  declarations: [MapComponent, LocationChoosePopupComponent],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
