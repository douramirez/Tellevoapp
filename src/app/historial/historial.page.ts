import { Component, OnInit } from '@angular/core';
import { TripService } from '../service/trip.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  trips: any[] = [];
  constructor(private tripService : TripService) { }

  ngOnInit() {
    this.trips = this.tripService.getTrips();
  }

}
