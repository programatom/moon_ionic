import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ColegiosModalPage } from '../colegios-modal/colegios-modal.page';
import { BrowserService } from '../services/browser.service';
import { NotificacionesService } from '../services/notificaciones.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // NOTAS 25 de MARZO casa de toti.
  // 1 -
  // 2 -
  // 3 - Link en moon sports para pagina web.
  // 4 -
  // 5 -
  // 6 -
  // 7 -
  // 8 -
  // 9 -
  // 10 -
  // 11 - Moon palace / Oasis.
  // 11.1 - Cuartos, Actividades, Restaurant en cada uno de los hoteles.
  // 11.2 - Cada uno tiene video, carrousel (full-width), descripcion. Emular diseño basico de fondo blanco.

  dias:number;
  horas:number;
  minutos:number;
  segundos:number;

  interval:any;

  trustedVideoUrl: SafeResourceUrl;
  homeVideoUrl = "https://www.youtube.com/embed/4N97HZjIv0I";

  constructor(private modalCtrl: ModalController,
              public browser: BrowserService,
              private navCtrl:NavController,
              private notificacionesServ: NotificacionesService,
              private domSanitizer: DomSanitizer
              ) {
              }

  ngOnInit() {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.homeVideoUrl);
    this.countdownFN();
    this.interval = setInterval(()=>{
      this.countdownFN()
    },1000)
  }

  irANotificaciones(){
    this.notificacionesServ.backUrl = "/tabs";
    this.navCtrl.navigateForward("/notificaciones");
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  async modalColegios(){
    let modal = await this.presentModalColegios();
    modal.present();
  }

  presentModalColegios(){
    return this.modalCtrl.create({
      "component":ColegiosModalPage
    })
  }

  iabUrl(url){
    this.browser.openUrlPlugin(url);
  }

  countdownFN(){
    let cancun = "09/20/2019";
    let hoy = new Date();
    let fechaObj = new Date(cancun);
    var timeDiff = Math.abs(hoy.getTime() - fechaObj.getTime());
    var dias = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.dias = dias;
    this.horas = 24 - hoy.getHours();
    this.minutos = 60 - hoy.getMinutes();
    this.segundos = 60 - hoy.getSeconds();
  }

}
