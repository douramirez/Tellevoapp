import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private trips: any[] = [];

  saveTripData(data: any) {
    this.trips.push(data);
  }

  getTrips() {
    return this.trips;
  }
}