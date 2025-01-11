import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
  standalone: false,
})
export class SeguridadPage implements OnInit {
  // Variables para manejar la pregunta de seguridad y su respuesta
  preguntaSeguridad: string = '';
  respuestaSeguridad: string = '';

  errores: {
    preguntaSeguridad: string | null;
    respuestaSeguridad: string | null;
  } = {
    preguntaSeguridad: null,
    respuestaSeguridad: null,
  };

  constructor() {}

  // Método para validar los campos y mostrar errores
  validarCampos() {
    let correcto = true;

    // Validación de pregunta de seguridad
    if (!this.preguntaSeguridad) {
      this.errores.preguntaSeguridad =
        'Debe seleccionar una pregunta de seguridad.';
      correcto = false;
    } else {
      this.errores.preguntaSeguridad = null;
    }

    // Validación de respuesta de seguridad
    if (!this.respuestaSeguridad.trim()) {
      this.errores.respuestaSeguridad =
        'Debe ingresar la respuesta a la pregunta de seguridad.';
      correcto = false;
    } else {
      this.errores.respuestaSeguridad = null;
    }

    // Si todo es correcto, muestra un mensaje de éxito
    if (correcto) {
      alert('Respuesta guardada correctamente');
    }
  }

  ngOnInit() {}

  guardarRespuesta() {
    if (this.preguntaSeguridad && this.respuestaSeguridad.trim()) {
      // Aquí puedes realizar cualquier acción si los campos están completos.
      console.log('Respuesta guardada correctamente');
    } else {
      // Aquí puedes manejar el caso cuando algún campo está vacío,
      // pero sin mostrar el mensaje de alerta intrusivo.
      this.errores.preguntaSeguridad =
        'Debe seleccionar una pregunta de seguridad.';
      this.errores.respuestaSeguridad =
        'Debe ingresar la respuesta a la pregunta de seguridad.';
    }
  }
}
