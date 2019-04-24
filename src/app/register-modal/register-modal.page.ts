import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ToastService } from '../services/toast.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Keyboard } from '@ionic-native/keyboard/ngx';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.page.html',
  styleUrls: ['./register-modal.page.scss'],
  animations: [
    trigger("openClose", [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]

    ),
    trigger("resize",[
      state("normal", style({
        width: "auto",
        height:"40vw",
        "text-align": "center"
      })),
      state("small", style({
        width: "auto",
        height:"15vw",
        "text-align": "center"
      })),
      transition('small => normal', [
        animate('0.6s ease-in')
      ]),
      transition('normal => small', [
        animate('0.15s ease-in')
      ]),
    ])

  ]
})
export class RegisterModalPage implements OnInit {
  /*
  width: 100%;
  border-top: solid 5px #000;
  border-color: #000 transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
  */

  isOpen = true;

  dataRegister = {
    "email": "",
    "name": "",
    "colegio": ""
  };
  colegio: string = "";

  keyboardShow = false;
  showSplash = false;

  constructor(private modalCtrl: ModalController,
    private authServ: AuthService,
    private localStorageServ: LocalStorageService,
    private navCtrl: NavController,
    private toastServ: ToastService,
    private googlePlus: GooglePlus,
    private keyboard: Keyboard) {

      this.keyboard.onKeyboardWillShow().subscribe(()=>{
        this.keyboardShow = !this.keyboardShow
        console.log("KEYBOARD SHOW: ", this.keyboardShow)
        if(this.keyboard.isVisible){
        }
      });
      this.keyboard.onKeyboardWillHide().subscribe(()=>{
        this.keyboardShow = !this.keyboardShow
        console.log("KEYBOARD HIDE: ", this.keyboardShow)
        if(!this.keyboard.isVisible){
        }
      });
  }

  toggle(){
    this.keyboardShow = !this.keyboardShow;
  }


  ngOnInit() {

  }

  switchRegister(type) {
    this.toggleSplash();
    switch(type){
      case("email"):
      this.register(this.colegio, this.dataRegister.name, this.dataRegister.email, "normal")
      break;
      case("google"):
      this.googleRegister();
      break;
    }
  }
//19092762993-oq3aegga0bo65r4i3ej0rig5p8nfi1o9.apps.googleusercontent.com
//com.googleusercontent.apps.19092762993-0u1lq9q5b2d4f3t14n8psvecc83p6kn5
  toggleSplash(){
    this.showSplash = !this.showSplash;
  }

  googleRegister(): void {
    this.googlePlus.login({
      'webClientId': '19092762993-oq3aegga0bo65r4i3ej0rig5p8nfi1o9.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      console.log(JSON.stringify(res));
      this.register(this.colegio, res.displayName, res.email, "google", res.imageUrl)
    })
      .catch(err => {
        this.toggleSplash();
        console.error("GOOGLE LOGIN ERROR: ", JSON.stringify(err));
        this.toastServ.presentToast("Ocurrió un error con el login de google!");
      });
  }


  register(colegio, nombre, email, type, photo_url = "NOT_SPECIFIED") {
    if(colegio == ""){
      colegio = "NO_ESPECIFICÓ"
    }
    this.showSplash = true;
    this.authServ.register({
      "colegio":colegio,
      "name":nombre,
      "email":email,
      "tipo":type,
      "photo_url":photo_url
    }).subscribe((respuesta) => {
      console.log(respuesta);
      this.toggleSplash();
      if (respuesta.status == "success") {
        this.instantiateTokenAndNav(respuesta.data, nombre);
      } else {
        let keys = Object.keys(respuesta.data);
        let errorMsg:string = respuesta.data[keys[0]][0];
        errorMsg = errorMsg.replace("name","nombre");
        if(errorMsg == "email_exists"){
          this.instantiateTokenAndNav(respuesta.token, nombre);
        }else{
          this.toastServ.presentToast(errorMsg);
        }
      }
      (err)=>{
        console.log(err);
        this.toggleSplash();
        this.toastServ.presentToast("Ocurrió algún error con nuestros servidores! Vuelva a intentar registrarse en otro momento!")
      }
    });
  }

  instantiateTokenAndNav(token, nombre){
    this.localStorageServ.insertAndInstantiateValue("token", token).then(() => {
      this.navCtrl.navigateForward("/tabs/home").then(() => {
        this.toastServ.presentToast("Bienvenido " + nombre);
        this.modalCtrl.dismiss();
      });
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
