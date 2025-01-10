import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
  standalone: false
})
export class RecuperarPasswordPage implements OnInit {
  nickname: string = '';
  clave: string = '';
  confirmarClave: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  // Mostrar alertas
  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Validar los campos del formulario
  validarCampos() {
    let correcto = true;

    // Validar nickname
    if (this.nickname.length < 3 || this.nickname.length > 25) {
      this.presentAlert('Error', 'El nickname debe tener entre 3 y 25 caracteres.');
      correcto = false;
    }

    // Validar nueva contraseña
    if (
      this.clave.length < 8 || this.clave.length > 20 || // Longitud
      !/[A-Z]/.test(this.clave) || // Al menos una mayúscula
      !/\d/.test(this.clave) || // Al menos un número
      !/[-!@#$%^&*.]/.test(this.clave) // Al menos un carácter especial
    ) {
      this.presentAlert(
        'Error',
        'La nueva contraseña debe tener entre 8 y 20 caracteres, incluir al menos una mayúscula, un número y un carácter especial.'
      );
      correcto = false;
    }

    // Validar confirmación de la contraseña
    if (this.clave !== this.confirmarClave) {
      this.presentAlert('Error', 'Las contraseñas no coinciden.');
      correcto = false;
    }

    if (!correcto) {
      return;
    }

    // Si todo está correcto, actualizar la contraseña
    this.actualizarPassword();
  }

  // Simular actualización de la contraseña
  actualizarPassword() {
    // Aquí puedes integrar la lógica para actualizar la contraseña en tu base de datos
    this.presentAlert('Éxito', 'La contraseña ha sido actualizada correctamente.');

    // Redirigir al login
    this.router.navigate(['/login']);
  }

  cancelar() {
    this.router.navigate(['/login']); 
  }

  ngOnInit() {
  }

}
