import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeTripPageRoutingModule } from './take-trip-routing.module';

import { TakeTripPage } from './take-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeTripPageRoutingModule
  ],
  declarations: [TakeTripPage]
})
export class TakeTripPageModule {}
