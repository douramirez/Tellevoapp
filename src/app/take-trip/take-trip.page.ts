import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TripService } from '../service/trip.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-take-trip',
  templateUrl: './take-trip.page.html',
  styleUrls: ['./take-trip.page.scss'],
})
export class TakeTripPage implements OnInit {

  trip: {start: string, end: string, price: number | null, status?: string} = {start: '', end: '', price: null};

  constructor(private alertController: AlertController, private tripService:TripService,private navCtrl: NavController) { }

  ngOnInit() {
    const tripJson = localStorage.getItem('trip');
    if (tripJson) {
      const tripData = JSON.parse(tripJson);
      this.trip.price = tripData.price;
      this.trip.start = tripData.start;
      this.trip.end = tripData.end;
    }
  }
  startTrip() {
    if (this.trip) {
      this.trip.status = 'En proceso';
    }
  }
  
  async endTrip() {
    if (this.trip) {
      this.trip.status = 'Finalizado';
      const alert = await this.alertController.create({
        header: 'Viaje Finalizado',
        message: 'El viaje ha finalizado exitosamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.tripService.saveTripData(this.trip);
      this.navCtrl.navigateRoot('/inicio');
    }
  }
}