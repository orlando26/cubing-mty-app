import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubingPage } from './cubing.page';

const routes: Routes = [
  {
    path: '',
    component: CubingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubingPageRoutingModule {}
