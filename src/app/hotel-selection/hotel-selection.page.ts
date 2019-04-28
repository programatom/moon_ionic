import { Component, OnInit } from '@angular/core';
import { BrowserService } from '../services/browser.service';
import { NavController } from '@ionic/angular';
import { NotificacionesService } from '../services/notificaciones.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-hotel-selection',
  templateUrl: './hotel-selection.page.html',
  styleUrls: ['./hotel-selection.page.scss'],
})
export class HotelSelectionPage implements OnInit {

  constructor(public browser: BrowserService,
              private navCtrl:NavController,
              private notificacionesServ: NotificacionesService,
              private toastServ: ToastService) { }

  ngOnInit() {

  }

  switchNav(type){
    switch(type){
      case "palace":
      this.navCtrl.navigateForward("/moon-palace");
      break;
      case "oasis":
      this.toastServ.presentToast("Esta sección está en desarrollo! Pronto estará en nuestra app.")
      //this.navCtrl.navigateForward("/oasis");
      break;
    }
  }

  irANotificaciones(){
    this.notificacionesServ.backUrl = "/tabs/hotel-selection";
    this.navCtrl.navigateForward("/notificaciones");
  }

}
