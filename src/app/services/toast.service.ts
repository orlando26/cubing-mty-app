import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  constructor(private toastController: ToastController) { }

  async simpleToast(msg) { 
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async coolToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'un texto v:',
          handler: () => {
            console.log('toast icon clicked');
          }
        }, {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
