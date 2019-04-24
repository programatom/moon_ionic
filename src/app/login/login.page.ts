import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterModalPage } from '../register-modal/register-modal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // FORM EMAIL (R) NOMBRE Y APELLIDO (R) NUMERO
  // INICIO CON GOOGLE Y FACEBOOK

  splash = false;

  constructor(private modalCtrl: ModalController) {
    console.log
  }

  ngOnInit() {
  }

  irARegister() {
    this.splash = true;
    this.modalRegister()
  }

  async modalRegister() {
    var modal = await this.registerModal();
    modal.present();
    modal.onDidDismiss().then(()=>{
      this.splash = false;
    })
  }

  async registerModal() {
    return this.modalCtrl.create({
      component: RegisterModalPage,
      cssClass:"modal-register",
      backdropDismiss: true,
    });
  }

}
