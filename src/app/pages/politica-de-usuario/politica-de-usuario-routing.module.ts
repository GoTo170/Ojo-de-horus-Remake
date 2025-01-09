import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaDeUsuarioPage } from './politica-de-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticaDeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticaDeUsuarioPageRoutingModule {}