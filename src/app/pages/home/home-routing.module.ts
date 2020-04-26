import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'cubing', pathMatch: 'full' },
      {
        path: 'cubing',
        loadChildren: () => import('../cubing/cubing.module').then( m => m.CubingPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'times',
        loadChildren: () => import('../times/times.module').then( m => m.TimesPageModule)
      },
      {
        path: 'records',
        loadChildren: () => import('../records/records.module').then( m => m.RecordsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
