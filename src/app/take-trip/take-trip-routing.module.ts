import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeTripPage } from './take-trip.page';

const routes: Routes = [
  {
    path: '',
    component: TakeTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeTripPageRoutingModule {}
