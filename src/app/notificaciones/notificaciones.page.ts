import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificacionesService } from '../services/notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor(private navCtrl: NavController,
              private notificacionesServ: NotificacionesService) { }

  ngOnInit() {
  }

  dismiss(){
    this.navCtrl.navigateBack(this.notificacionesServ.backUrl);
  }

}
