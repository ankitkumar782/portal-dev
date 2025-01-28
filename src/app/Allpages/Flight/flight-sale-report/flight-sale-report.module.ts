import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightSaleReportPageRoutingModule } from './flight-sale-report-routing.module';

import { FlightSaleReportPage } from './flight-sale-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightSaleReportPageRoutingModule
  ],
  declarations: [FlightSaleReportPage]
})
export class FlightSaleReportPageModule {}
