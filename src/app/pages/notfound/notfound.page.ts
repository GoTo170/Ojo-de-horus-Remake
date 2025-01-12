import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
  standalone: false
})
export class NotfoundPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ionViewWillEnter(){
    //para desabilitar el menu deslizable
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    //para habilitar el menu cuando salgamos del not found
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
  }

}
