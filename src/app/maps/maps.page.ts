import { Component, OnInit } from '@angular/core';

declare var google : any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map = null;
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const  mapEle:  HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat: -33.5151301, lng: -70.7209969};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      
      mapEle.classList.add('show-map');
    });
  }

}
