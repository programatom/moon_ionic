import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//Plugins
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyB9UCB-WMGil0ybBdVgEHQzGUs4X6xtrww",
   authDomain: "moon-travel-app-237417.firebaseapp.com",
   databaseURL: "https://moon-travel-app-237417.firebaseio.com",
   projectId: "moon-travel-app-237417",
   storageBucket: "moon-travel-app-237417.appspot.com",
   messagingSenderId: "19092762993"
 };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    GooglePlus,
    Keyboard,
    EmailComposer,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
