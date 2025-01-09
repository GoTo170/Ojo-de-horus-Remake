import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaDeUsuarioPageRoutingModule } from './politica-de-usuario-routing.module';

import { PoliticaDeUsuarioPage } from './politica-de-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaDeUsuarioPageRoutingModule
  ],
  declarations: [PoliticaDeUsuarioPage]
})
export class PoliticaDeUsuarioPageModule {}
