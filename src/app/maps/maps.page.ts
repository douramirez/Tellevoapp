import { Component, OnInit } from '@angular/core';

declare var google : any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map = null;
  geocoder = new google.maps.Geocoder();
  constructor() { }
  marker = null;

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
      zoom: 12,
      disableDefaultUI: true, // Desactiva la interfaz de usuario predeterminada
      zoomControl: false, // Desactiva el control de zoom
    });

    // create a marker
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

  addMarker() {
    console.log('addMarker function called');
    const address = (<HTMLInputElement>document.getElementById('autocomplete')).value;
    
    if (address) {
      this.geocoder.geocode({ 'address': address }, (results:any, status:any) => {
        if (status == 'OK') {
          console.log('Geocoding results:', results);
          const marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
          });
          console.log('Marker created:', marker);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    } else {
      alert('Please enter an address');
    }
  }
}