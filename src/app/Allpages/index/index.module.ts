import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';
// import { ComponentShareModule } from '../../form-share/component-share.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    // ComponentShareModule
    
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {
}
