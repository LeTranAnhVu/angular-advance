import {Component, OnInit} from '@angular/core';

declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map: any;
  public markIcon: any;
  public markersLatLng: any[] = [];

  constructor() {
    this.markIcon = {
      icon: L.icon({
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png'
      })
    };
  }

  markerFactory(corr) {
    L.marker(corr, this.markIcon).addTo(this.map).bindPopup('<p>Hello world!<br />This is a nice popup.</p>').openPopup();
    this.markersLatLng.push(corr);
    this.updateBound();
  }

  onMapClick(e) {
    console.log('click', e);
    this.markerFactory([e.latlng.lat, e.latlng.lng]);
  }

  updateBound() {
    console.log('go here');
    this.map.fitBounds(this.markersLatLng, {
      padding: [10, 10]
    });
  }

  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    L.marker([51.505, -0.09], this.markIcon).addTo(this.map).bindPopup('<p>Hello world!<br />This is a nice popup.</p>').openPopup();
    this.markersLatLng.push([51.505, -0.09]);
    this.map.on('click', this.onMapClick.bind(this));

    this.markerFactory([10.762622, 106.660172]);
    this.markerFactory([-22.729958, - 47.334938]);
  }

}
