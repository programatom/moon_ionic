import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(private iab:InAppBrowser,
              private plt: Platform) {

  }

  openUrlPlugin(url){
    let isIos = this.plt.is("ios");
    //let options = "toolbarcolor=#6c92c2,closebuttoncaption=Volver";
    if(url == "facebook"){
      url = "fb://profile/355679121210127"
    }else if(url == "instagram"){
      //1498198254
      url = "instagram://user?username=moontravel"
    }
    console.log("ABRIENDO URL: " + JSON.stringify(url));
    this.iab.create(url,'_system');
  }

  test(url){
    this.iab.create(url);
  }


}
