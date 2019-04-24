import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private localStorageServ: LocalStorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.localStorageServ.searchAndInstantiateKey("token").then((respuesta:any)=>{
        if(respuesta.status == "success"){
          this.navCtrl.navigateForward("/tabs/home")
          this.statusBar.styleLightContent();
          this.splashScreen.hide();
        }else{
          this.navCtrl.navigateForward("");
          this.statusBar.styleLightContent();
          this.splashScreen.hide();
        }
      })
    });
  }
}
