import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
  standalone: false
})
export class CambiarPasswordPage implements OnInit {
  preguntaSeguridad: string = '';
  clave: string = '';
  confirmarClave: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  cambiarContraseña() {
    // Verificar si la pregunta de seguridad y las contraseñas son válidas
    if (!this.preguntaSeguridad) {
      alert('La pregunta de seguridad es requerida');
      return;
    }

    if (this.clave !== this.confirmarClave) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validaciones de la contraseña
    if (
      this.clave.length < 8 ||
      this.clave.length > 20 ||
      !/[A-Z]/.test(this.clave) ||
      !/\d/.test(this.clave) ||
      !/[-!@#$%^&*.]/.test(this.clave)
    ) {
      alert(
        'La contraseña debe tener entre 8 y 20 caracteres, contener al menos una mayúscula, un número y un carácter especial.'
      );
      return;
    }
  }
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Próximamente',
      message: 'Esta funcionalidad estará disponible pronto.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
