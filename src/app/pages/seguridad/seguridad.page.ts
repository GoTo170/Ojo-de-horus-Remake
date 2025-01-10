import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
  standalone: false
})
export class SeguridadPage implements OnInit {
  // Variables para manejar la pregunta de seguridad y su respuesta
  preguntaSeguridad: string = '';
  respuestaSeguridad: string = '';

  constructor() { }

  ngOnInit() {
  }
  // Método solo visual: verifica si los campos están llenos para mostrar cambios visuales
  guardarRespuesta() {
    if (this.preguntaSeguridad && this.respuestaSeguridad.trim()) {
      alert('Respuesta guardada correctamente');
    } else {
      alert('Por favor, complete ambos campos');
    }
  }
}
