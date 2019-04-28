import { Component, OnInit } from '@angular/core';
import { BrowserService } from '../services/browser.service';
import { NavController } from '@ionic/angular';
import { NotificacionesService } from '../services/notificaciones.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  nombre:string = "";
  email:string = "";
  numero:string = "";
  comentario:string = "";

  constructor(
    private browser: BrowserService,
    private navCtrl: NavController,
    private notificacionesServ: NotificacionesService,
    private emailComposer: EmailComposer,
    private toastServ: ToastService) { }

  ngOnInit() {
  }
  irANotificaciones() {
    this.notificacionesServ.backUrl = "/tabs/contacto";
    this.navCtrl.navigateForward("/notificaciones");
  }

  enviarEmail() {

    let email = {
      to: 'moontravel1995@gmail.com',
      subject: 'Reserva de viaje APP',
      body: 'Nombre: ' + this.nombre + "\n" + "Numero: " + this.numero + "\n" + "Comentario: " + this.comentario,
      isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email).then((result)=>{
      console.log(result)
    })
    .catch((err)=>{
      console.error("EMAIL",JSON.stringify(err));
      this.toastServ.presentToast("Ocurrió un error con el envío del email", "error")
    });
  }

  irAWhatsapp() {
    let numeroDeTelefono = "5491140244052";
    this.browser.openUrlPlugin("https://api.whatsapp.com/send?phone=" + numeroDeTelefono + "&text=&source=&data=");
  }


}
