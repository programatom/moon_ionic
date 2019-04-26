import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BrowserService } from '../services/browser.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-moon-palace',
  templateUrl: './moon-palace.page.html',
  styleUrls: ['./moon-palace.page.scss'],
  animations: [
    trigger("fadeIn",[
      state("transparent", style({
        opacity: 0,
      })),
      state("visible", style({
        opacity: 1,
      })),
      transition('transparent => visible', [
        animate('0.6s ease-in')
      ]),
    ])
  ]
})
export class MoonPalacePage implements OnInit {

  slideOpts = {
    slidesPerView: 2,
    spaceBetween: 3
  }

  slideOptsCustom = {
    slidesPerView: 1,
    spaceBetween: 3
  }

  fadeIn = false;

  mediaObject = {
    "actividades":
    {
      "imagenes":[
        "../../assets/imgs/hotel/flow-rider-actividad.jpg",
        "../../assets/imgs/hotel/golf-actividad.jpeg",
        "../../assets/imgs/hotel/tennis-actividad.jpeg",
        "../../assets/imgs/hotel/kayak-actividad.jpg",
        "../../assets/imgs/hotel/windsurf-actividad.jpg",
        "../../assets/imgs/hotel/volley-actividad.jpeg"
      ],
      "video": "https://www.youtube.com/embed/zo0B2zo9NKc",
      "puntos":[
        "Gimnasio",
        "Golf y mini-golf",
        "Flowrider",
        "Playroom (pc, ps4, juegos, sacoa)",
        "Movie,time",
        "Tour de bicicletas",
        "Volleyball, acuatico y playero",
        "Aqua aerobics",
        "8 deportes",
        "Clases de baile y zumba",
        "Clases de cocina y coctelería",
        "Basquetball",
        "Torneo de ping-pong",
        "Futbol playero de 5 y de 11 (césped)",
        "Texas holdem Black Jack (Premios NO monetarios)",
        "Nauticas: kayak, stand-up, paddle, velero, windsurf."
      ]
    },
    "cuartos":
      {
        "imagenes":[
          "../../assets/imgs/hotel/cuarto1.jpeg",
          "../../assets/imgs/hotel/cuarto2.jpeg",
          "../../assets/imgs/hotel/cuarto3.jpg",
          "../../assets/imgs/hotel/cuarto4.jpg"
        ],
        "video": "https://www.youtube.com/embed/akVmF40WA5o",
        "puntos":[
          "Jacuzzi",
          "Frigobar (con reposición diaria)",
          "Teléfonos inteligentes de comunicación al servicio e interno.",
          "Room service 24 hs",
          "Camas king size",
          "Balcón en primer piso",
          "cada balcón cuenta con una hamaca paraguaya",
          "Pulsera magnética (individual)  para el ingreso a los cuartos",
          "Plasma con Netflix",
          "Caja de seguridad digital con entrada USB interna para dejar aparatos tecnológicos de gran valor cargándose"
        ]
      }

    ,
    "restaurant":
      {
        "imagenes":[
          "../../assets/imgs/hotel/moon_palace_arrecifes.PNG",
          "../../assets/imgs/hotel/moon_palace_bugambilias.jpg",
          "../../assets/imgs/hotel/moon_palace_los_caporales.PNG",
          "../../assets/imgs/hotel/moon_palace_manglar.PNG",
          "../../assets/imgs/hotel/moon_palace_mobile_munchies.PNG",
          "../../assets/imgs/hotel/moon_palace_momo.PNG",
          "../../assets/imgs/hotel/moon_palace_palapa_pelicanos.PNG"
        ],
        "video": "https://www.youtube.com/embed/qrIWqw4u3ps",
        "puntos":[
          "Sushi",
          "Teppanyaki",
          "Chino",
          "Italiano",
          "Brasileño",
          "Argentino",
          "Mexicano",
          "Carnes",
          "Mariscos",
          "Snacks",
          "Pizzas para veganos y celiacos",

          "BBQ"
        ]
      }
  }

  constructor(private navCtrl:NavController,
              public browser: BrowserService,
              private _sanitizer: DomSanitizer) {
              }

  ngOnInit() {

    this.sanitizeUrls();
   //  setTimeout(()=>{
   //   this.fadeIn = !this.fadeIn;
   //   this.fadeIn = !this.fadeIn;
   // },1000)
 }



  sanitizeUrls(){
    let keys = Object.keys(this.mediaObject);
    keys.filter((key)=>{
      let array = this.mediaObject[key].imagenes;
      this.mediaObject[key].video = this._sanitizer.bypassSecurityTrustResourceUrl(this.mediaObject[key].video);
      console.log(array)
      console.log(key)
      array.filter((url)=>{
        this._sanitizer.bypassSecurityTrustStyle('url('+ url +');')
      })
    });
  }

  dismiss(){
    this.navCtrl.navigateBack("/tabs/hotel-selection");
  }

}
