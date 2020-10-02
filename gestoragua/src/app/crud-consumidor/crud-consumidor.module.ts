import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudConsumidorPageRoutingModule } from './crud-consumidor-routing.module';

import { CrudConsumidorPage } from './crud-consumidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudConsumidorPageRoutingModule
  ],
  declarations: [CrudConsumidorPage]
})
export class CrudConsumidorPageModule {}
