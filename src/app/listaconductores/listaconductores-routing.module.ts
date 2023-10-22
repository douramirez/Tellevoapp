import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaconductoresPage } from './listaconductores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaconductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaconductoresPageRoutingModule {}
