import { Component, OnInit } from '@angular/core';
import { PortadaTextoService } from '../services/services.index';
import { NavController } from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portada-texto',
  templateUrl: './portada-texto.page.html',
  styleUrls: ['./portada-texto.page.scss'],
})
export class PortadaTextoPage implements OnInit {

  trustedVideoUrl: SafeResourceUrl;


  constructor(public portadaServ: PortadaTextoService,
              private navCtrl: NavController,
              private domSanitizer: DomSanitizer) {
              }

  ngOnInit() {
    console.log(this.portadaServ.media)
    console.log(this.portadaServ.mediaType)

    if(this.portadaServ.mediaType == "video"){
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.portadaServ.media);
    }
  }

  dismiss(){
    this.navCtrl.navigateBack(this.portadaServ.backUrl);
  }

}
