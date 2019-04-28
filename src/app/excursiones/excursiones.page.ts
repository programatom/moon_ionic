import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PortadaTextoService } from '../services/services.index';
import { NotificacionesService } from '../services/notificaciones.service';
import { BrowserService } from '../services/browser.service';

@Component({
  selector: 'app-excursiones',
  templateUrl: './excursiones.page.html',
  styleUrls: ['./excursiones.page.scss'],
})
export class ExcursionesPage implements OnInit {

  excursiones = [{
    "url_foto":"../../assets/imgs/excursiones/excursiones-isla-mujeres.jpg",
    "titulo":"Isla Mujeres",
    "descripcion":"Increíble paseo de día entero, salida en barcos exclusivos llenos de música y diversión. Visitamos la isla y nos turnamos en las diferentes actividades (volley kayac stand up paddle snorkel ) buceo tatuajes de henna y trensas para pelo, no están incluidos en el paquete.",
    "mediaType":"video",
    "media":"https://www.youtube.com/embed/Z0nNnRundWM"
  },
  {
    "url_foto":"../../assets/imgs/excursiones/excursiones-jungle.jpeg",
    "titulo":"Jungle Tour",
    "descripcion": "Conducimos nuestra propia lancha hacia uno de los arrecifes mas conocidos de cancun para practicar snorkel y observar una infinita variedad de peces que habitan en el caribe. Un Guia cada 7 lanchas.",
    "mediaType":"video",
    "media":"https://www.youtube.com/embed/ayLBH1-EL_o"
  },
  {
    "url_foto":"../../assets/imgs/excursiones/excursiones-VENTURA-TIROLESA.jpg",
    "titulo":"Ventura Park",
    "descripcion":"Una experiencia inolvidable de piletas con olas artificiales, toboganes individuales toboganes duos y grupal. Rio artificial, montaña rusa, tirolesa, hamacas voladoras, laser shot, escape perfecto. (Carting y nadar con delfines no se encuentra incluido en el paquete, costo adicional)",
    "mediaType":"video",
    "media":"https://www.youtube.com/embed/iMFi3EBY1ns"
  },
  {
    "url_foto":"../../assets/imgs/excursiones/city-tour.jpg",
    "titulo":"City Tour",
    "descripcion":"Paseo por down town cancun y visita al shopping La Isla.",
    "mediaType":"image",
    "media":"../../assets/imgs/excursiones/city-tour.jpg"
  },
  {
    "url_foto":"../../assets/imgs/excursiones/playa-carmen.jpg",
    "titulo":"Playa Del Carmen",
    "descripcion":"Día de playa diferente y recorrida por la famosa Quinta Avenida también conocida como  “gran pasarela de outlets”.",
    "mediaType":"video",
    "media":"https://www.youtube.com/embed/vbzbSdp_B5E"
  },
  {
    "url_foto":"../../assets/imgs/excursiones/ruinas-de-tulum.jpg",
    "titulo":"Ruinas De Tulum",
    "descripcion":"Día de visita al legado Maya mas importante de la region con guías contratados para estudiantes. Playas paradisiacas. ",
    "mediaType":"video",
    "media":"https://www.youtube.com/embed/jdpVwLk7ZlY"
  }]
  constructor(private navCtrl: NavController,
              private portadaServ: PortadaTextoService,
              private notificacionesServ: NotificacionesService,
              public browser: BrowserService) { }

  ngOnInit() {
  }
  irANotificaciones(){
    this.notificacionesServ.backUrl = "/tabs/excursiones";
    this.navCtrl.navigateForward("/notificaciones");
  }

  irAPortadaTexto(url, title, descripcion, mediaType){
    this.portadaServ.descripcion = descripcion;
    this.portadaServ.titulo = title;
    this.portadaServ.media = url;
    this.portadaServ.mediaType = mediaType
    this.portadaServ.backUrl = "/tabs/excursiones"
    this.navCtrl.navigateForward("/portada-texto");
  }

}
