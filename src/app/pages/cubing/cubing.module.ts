import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CubingPageRoutingModule } from './cubing-routing.module';

import { CubingPage } from './cubing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubingPageRoutingModule
  ],
  declarations: [CubingPage]
})
export class CubingPageModule {}
