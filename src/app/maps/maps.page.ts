import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

declare var google : any;



@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})


export class MapsPage implements OnInit {
  directionsRenderer = new google.maps.DirectionsRenderer();
  trip: {start: {lat: number, lng: number} | null, end: {lat: number, lng: number} | null, price: number | null} = {start: null, end: null, price: null};

  map = null;
  geocoder = new google.maps.Geocoder();
  constructor(private router: Router, private alertController:AlertController) { }
  marker = null;
  price: number | null = null;
  

  ngOnInit() {
    this.loadMap();
    
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const  mapEle:  HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat: -33.516244, lng: -70.7209969};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13,
      disableDefaultUI: true, // Desactiva la interfaz de usuario predeterminada
      zoomControl: false, // Desactiva el control de zoom
    });
    
  }

  
  async addMarker() {
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
    geocoder.geocode({ 'address': address }, async (results:any, status:any) => {
      if (status == 'OK') {
        const end = results[0].geometry.location;
  
        // Guardar las direcciones en lugar de las coordenadas
        await this.getAddress(start, 'start');
        await this.getAddress(end, 'end');
  
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
        alert('ingrese una dirección ' );
      }
    });
  }
  
  getAddress(location:any, type:any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.geocoder.geocode({'location': location}, (results:any, status:any) => {
        if (status === 'OK') {
          if (results[0]) {
            if (type === 'start') {
              this.trip.start = results[0].formatted_address;
            } else if (type === 'end') {
              this.trip.end = results[0].formatted_address;
            }
          }
          resolve();
        } else {
          reject(status);
        }
      });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Creado',
      message: 'El viaje ha sido creado exitosamente.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async saveTrip() {
    try {
      // Verificar si todos los campos están rellenos
      if (!this.trip.start || !this.trip.end || !this.trip.price) {
        const alert = await this.alertController.create({
          header: 'Campos Faltantes',
          message: 'Por favor, rellene todos los campos.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
  
      const tripJson = JSON.stringify(this.trip);
      localStorage.setItem('trip', tripJson);
      console.log(tripJson);
      this.router.navigate(['/inicio']);
      this.presentAlert();
    } catch (error:any) {
      console.error('Error: ', error);
    }
  }

    volverInicio(){
      this.router.navigate(['/inicio']);
    }
  
}