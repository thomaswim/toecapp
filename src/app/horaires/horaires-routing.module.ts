import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorairesPage } from './horaires.page';

const routes: Routes = [
  {
    path: '',
    component: HorairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorairesPageRoutingModule {}
