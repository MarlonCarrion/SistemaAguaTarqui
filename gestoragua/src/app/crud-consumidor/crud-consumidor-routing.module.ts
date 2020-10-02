import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudConsumidorPage } from './crud-consumidor.page';

const routes: Routes = [
  {
    path: '',
    component: CrudConsumidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudConsumidorPageRoutingModule {}
