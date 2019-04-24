import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BrowserService } from '../services/browser.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-moon-palace',
  templateUrl: './moon-palace.page.html',
  styleUrls: ['./moon-palace.page.scss'],
})
export class MoonPalacePage implements OnInit {

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 3
  }

  mediaObject = {
    "actividades":[
      "../../assets/imgs/hotel/flow-rider-actividad.jpg",
      "../../assets/imgs/hotel/golf-actividad.jpeg",
      "../../assets/imgs/hotel/tennis-actividad.jpeg",
      "../../assets/imgs/hotel/kayak-actividad.jpg",
      "../../assets/imgs/hotel/windsurf-actividad.jpg",
      "../../assets/imgs/hotel/volley-actividad.jpeg",
    ],
    "cuartos":[
      "../../assets/imgs/hotel/cuarto1.jpeg",
      "../../assets/imgs/hotel/cuarto2.jpeg",
      "../../assets/imgs/hotel/cuarto3.jpg",
      "../../assets/imgs/hotel/cuarto4.jpg",
    ],
    "restaurant":[
      "../../assets/imgs/hotel/moon_palace_arrecifes.PNG",
      "../../assets/imgs/hotel/moon_palace_bugambilias.jpg",
      "../../assets/imgs/hotel/moon_palace_los_caporales.PNG",
      "../../assets/imgs/hotel/moon_palace_manglar.PNG",
      "../../assets/imgs/hotel/moon_palace_mobile_munchies.PNG",
      "../../assets/imgs/hotel/moon_palace_momo.PNG",
      "../../assets/imgs/hotel/moon_palace_palapa_pelicanos.PNG",
      "../../assets/imgs/hotel/moon_palace_pepes_pizza.PNG",
    ]
  }

  constructor(private navCtrl:NavController,
              public browser: BrowserService,
              private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeUrls(){
    let keys = Object.keys(this.mediaObject);
    keys.filter((key)=>{
      let array = this.mediaObject[key];
      array.filter((url)=>{
        this._sanitizer.bypassSecurityTrustStyle('url('+ url +');')
      })
    });
  }

  dismiss(){
    this.navCtrl.navigateBack("/tabs/hotel-selection");
  }

}
