import { Component, OnInit } from '@angular/core';
import { COLEGIOS } from 'src/const/const';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-colegios-modal',
  templateUrl: './colegios-modal.page.html',
  styleUrls: ['./colegios-modal.page.scss'],
})
export class ColegiosModalPage implements OnInit {
  anosKeys: string[];
  colegiosViajesArray = [];

  constructor(private modalCtrl: ModalController) { }
  // ITERO LOS AÑOS, EN CADA AÑO ITERO LOS VIAJES, EN CADA VIAJE MUESTRO LOS COLES

  ngOnInit() {
    this.anosKeys = Object.keys(COLEGIOS);
    for(let i = 0; i < this.anosKeys.length; i ++){
      let ano = this.anosKeys[i];
      this.colegiosViajesArray.push({
        "ano":ano,
        "viajes":new Array()
      });
      let keysViajes = Object.keys(COLEGIOS[ano]);
      keysViajes.forEach((viaje)=>{
        this.colegiosViajesArray[i]["viajes"].push({
          "lugar":viaje,
          "colegios":COLEGIOS[ano][viaje]
        })
      })
    }
    this.colegiosViajesArray.reverse();
    console.log(this.colegiosViajesArray)
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
