import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    const map = L.map('map').setView([-0.091702, 34.767956], 13); // Coordinates for Kisumu, Kenya

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([-0.091702, 34.767956]).addTo(map); // Marker at Kisumu, Kenya
    marker.bindPopup('<b>Kisumu, Kenya</b><br>Located in western Kenya on Lake Victoria.');
  }

}
