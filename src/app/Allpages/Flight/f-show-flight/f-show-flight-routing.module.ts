import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FShowFlightPage } from './f-show-flight.page';

const routes: Routes = [
  {
    path: '',
    component: FShowFlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FShowFlightPageRoutingModule {}
