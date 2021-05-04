import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorairesPageRoutingModule } from './horaires-routing.module';

import { HorairesPage } from './horaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorairesPageRoutingModule
  ],
  declarations: [HorairesPage]
})
export class HorairesPageModule {}
