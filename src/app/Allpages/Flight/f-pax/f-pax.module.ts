import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FPaxPageRoutingModule } from './f-pax-routing.module';
import { FPaxPage } from './f-pax.page';
import { FormShareModule } from '../../../form-share/form-share.module';
import { SeatSelectionModule } from '../seat-selection/seat-selection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FPaxPageRoutingModule,
    FormShareModule,
    ReactiveFormsModule,
    SeatSelectionModule
  ],
  declarations: [FPaxPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FPaxPageModule { }
