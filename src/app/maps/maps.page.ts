import { Component, OnInit} from '@angular/core';

declare var google : any;



@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})


export class MapsPage implements OnInit {
  directionsRenderer = new google.maps.DirectionsRenderer();

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
    
  }

  
    addMarker() {
      console.log('addMarker function called');
      const address = (<HTMLInputElement>document.getElementById('autocomplete')).value;
  
      const directionsService = new google.maps.DirectionsService();
      const geocoder = new google.maps.Geocoder();
  
      // Definir el punto de inicio
      const start = new google.maps.LatLng(-33.5151301, -70.7209969);
  
      if (this.directionsRenderer.getDirections()) {
        this.directionsRenderer.setDirections(null);
      }
      
  
      // Convertir la dirección ingresada por el usuario en coordenadas
      geocoder.geocode({ 'address': address }, (results:any, status:any) => {
        if (status == 'OK') {
          const end = results[0].geometry.location;
  
          directionsService.route(
            {
              origin: start,
              destination: end,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (response:any, status:any) => {
              if (status === "OK") {
                this.directionsRenderer.setDirections(response);
                this.directionsRenderer.setMap(this.map);
              } else {
                window.alert("Directions request failed due to " + status);
              }
            }
          );
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  
}