import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  nickname:string="";
  clave:string="";
  email:string="";
  cclave:string="";

  constructor(private alertController: AlertController, private router: Router) { }
  async presentAlert(titulo:string, mensaje:string) { //agrega parametros para que no haya que hacer cada una de las alertas y solo tengamos una para todas
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  //funcion para validacion de nick
  validarCampos(){
    let correcto = true;

    //validacion largo nick
    if(this.nickname.length < 3 || this.nickname.length > 25 || this.clave.length < 8 || this.clave.length > 20){
      //msj html (investigar)

      //msj alerta
      this.presentAlert("Error", "El nick o la clave son incorrectos");

      //cambio bandera
      correcto = false;
    }

    //para finalizar
    if(correcto){
      //si es correcto
      this.presentAlert("Registro", "A registrado un nuevo usuario correctamente")
      //para redireccionar
      this.router.navigate(['/login'])
    }

  }
  ngOnInit() {
  }

}
