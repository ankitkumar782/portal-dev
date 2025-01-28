import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightSaleReportPage } from './flight-sale-report.page';

const routes: Routes = [
  {
    path: '',
    component: FlightSaleReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightSaleReportPageRoutingModule {}
