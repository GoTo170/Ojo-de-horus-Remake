import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
  standalone: false,
})
export class ComunidadPage implements OnInit {

  constructor() { }

  //boton para ir e edit perfil
  redirectToPage() {
    console.log('Botón para editar comunidad presionado');
  }

  ngOnInit() {
  }

}
