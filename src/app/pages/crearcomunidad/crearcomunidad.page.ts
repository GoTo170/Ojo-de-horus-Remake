import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-crearcomunidad',
  templateUrl: './crearcomunidad.page.html',
  styleUrls: ['./crearcomunidad.page.scss'],
  standalone: false
})
export class CrearcomunidadPage implements OnInit {

  // Variables para los campos del formulario
  nombreComunidad: string = '';
  descripcionComunidad: string = '';
  categoriasSeleccionadas: string[] = [];

  // Objeto para almacenar errores de validación
  errores: { nombre: string | null; descripcion: string | null; categorias: string | null } = {
    nombre: null,
    descripcion: null,
    categorias: null,
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  // Validación del campo "Nombre de la Comunidad"
  validarNombre() {
    if (!this.nombreComunidad || this.nombreComunidad.trim().length < 1) {
      this.errores.nombre = 'El nombre no puede estar vacío.';
    } else if (this.nombreComunidad.trim().length > 20) {
      this.errores.nombre = 'El nombre no puede superar los 20 caracteres.';
    } else {
      this.errores.nombre = null;
    }
  }

  // Validación del campo "Descripción"
  validarDescripcion() {
    if (this.descripcionComunidad.length > 250) {
      this.errores.descripcion = 'La descripción no puede superar los 250 caracteres.';
    } else {
      this.errores.descripcion = null;
    }
  }

  // Validación del campo "Categorías"
  validarCategorias() {
    if (this.categoriasSeleccionadas.length === 0) {
      this.errores.categorias = 'Debe seleccionar al menos una categoría.';
    } else {
      this.errores.categorias = null;
    }
  }

   // Función para cancelar y redirigir
   cancelar() {
    this.router.navigate(['/comunidades']); // Redirige a la página comunidad
  }

  // Validación completa del formulario
  validarFormulario(event: Event) {
    event.preventDefault();

    // Validar los campos individuales
    this.validarNombre();
    this.validarDescripcion();
    this.validarCategorias();

    // Si hay errores, no se procesa el formulario
    if (this.errores.nombre || this.errores.descripcion || this.errores.categorias) {
      return;
    }

    // Procesar los datos del formulario si todo es válido
    console.log('Formulario válido:', {
      nombre: this.nombreComunidad,
      descripcion: this.descripcionComunidad,
      categorias: this.categoriasSeleccionadas,
    });
  }
}
