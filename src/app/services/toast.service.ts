import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toastCtrl: ToastController,
                private alertCtrl: AlertController) { }

    async presentToast(message, estado = "neutro", position: any = "top", duration = 3000) {

        const toast = await this.toastCtrl.create({
            message: message,
            position: position,
            duration: duration,
            showCloseButton: true,
            closeButtonText: 'Cerrar',
            cssClass: estado
        });
        toast.present();
    }

    async presentAlert(header?, subHeader?, inputs?, buttons?, message?) {


        let alertOptions = new Object() as AlertOptions;

        if (header != undefined) {
            alertOptions.header = header
        }
        if (subHeader != undefined) {
            alertOptions.subHeader = subHeader
        }
        if (inputs != undefined) {
            alertOptions.inputs = inputs
        }
        if (buttons != undefined) {
            alertOptions.buttons = buttons
        }
        if (buttons != undefined) {
            alertOptions.message = message
        }

        const alert = await this.alertCtrl.create(alertOptions);
        return await alert.present();
    }
}
