import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: false,
})
export class CamaraPage implements OnInit {
  fotografia: any;

  constructor() { }
  
  takePicture = async () => {   //quitar el const de cuando copiamos el codigo del ionic docs
    const image = await Camera.getPhoto({ //se debe agregar los imports de camara y camaraResultType
      quality: 90,
      allowEditing: false, //con esto no se podra editar y se guardara la imagen de una
      resultType: CameraResultType.Uri
    });
  
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    this.fotografia.src = imageUrl; //aqui quitamos el imagenElement y ponemos this.nombredelavariable 
  };

  ngOnInit() {
  }

}
