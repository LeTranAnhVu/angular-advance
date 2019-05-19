import {Component, OnInit} from '@angular/core';

declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public markIcon: any;

  constructor() {
    this.markIcon = {
      icon: L.icon({
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png'
      })
    };
  }

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.505, -0.09], this.markIcon).addTo(map).bindPopup('<p>Hello world!<br />This is a nice popup.</p>').openPopup();
  }

}
