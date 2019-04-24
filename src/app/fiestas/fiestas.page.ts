import { Component, OnInit } from '@angular/core';
import { PortadaTextoService } from '../services/services.index';
import { NavController } from '@ionic/angular';
import { BrowserService } from '../services/browser.service';
import { NotificacionesService } from '../services/notificaciones.service';

@Component({
  selector: 'app-fiestas',
  templateUrl: './fiestas.page.html',
  styleUrls: ['./fiestas.page.scss'],
})
export class FiestasPage implements OnInit {

  fiestas = [{
    "url_foto":"../../assets/imgs/fiestas/a-man-has-no-costume.jpg",
    "titulo":"A Man Has No Costume",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/8hOjdbGTtos"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/coco-bongo.jpg",
    "titulo":"Coco Bongo",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/jdpVwLk7ZlY"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/cool-by-the-pool.jpg",
    "titulo":"Cool By The Pool",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/Q9dMtOLKYNA"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/dark-knight.jpg",
    "titulo":"Dark Knight",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/VaXRPffMCgA"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/fluo-imagination.jpg",
    "titulo":"Fluo Imagination",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/VQ0y5cm-3VQ"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/into-the-foam.jpg",
    "titulo":"Into The Foam",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/i8NJ91yylKs"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/moon-colors.jpg",
    "titulo":"Moon Colors",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/jdpVwLk7ZlY"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/traffic-light-party.jpg",
    "titulo":"Traffic Light Party",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/5CCDAsIvv-g"
  },
  {
    "url_foto":"../../assets/imgs/fiestas/white-party.jpg",
    "titulo":"White Party",
    "mediaType":"video",
    "descripcion":"",
    "media":"https://www.youtube.com/embed/FEPQlxJ4E1k"
  }]

  constructor(private portadaServ: PortadaTextoService,
              private navCtrl: NavController,
              public browser: BrowserService,
              private notificacionesServ: NotificacionesService) { }

  ngOnInit() {
  }
  irANotificaciones(){
    this.notificacionesServ.backUrl = "/tabs/fiestas";
    this.navCtrl.navigateForward("/notificaciones");
  }

  irAPortadaTexto(url, title, descripcion, mediaType){
    this.portadaServ.descripcion = descripcion;
    this.portadaServ.titulo = title;
    this.portadaServ.media = url;
    this.portadaServ.mediaType = mediaType
    this.portadaServ.backUrl = "/tabs/fiestas"
    console.log(url)
    this.navCtrl.navigateForward("/portada-texto");
  }


}
