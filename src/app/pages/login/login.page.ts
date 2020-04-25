import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  images: string[] = ['background_sign']
  pagesSign: string = this.images[0];

  showPassword = false;
  passwordToggleIcon = 'eye';
  togglePassword():void{
    this.showPassword = !this.showPassword;
    
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
      
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }

  nickname = '';
  password = '';
  getCredentials(){
    if(this.nickname && this.password){
      console.log("nickname:" + this.nickname);
      console.log("password:" + this.password);
      console.log("Navigating to Home (timer)")
      this.router.navigateByUrl('/home');
    }else{
      console.log("Empty fields");
      // alert('Por favor llena todos los campos v:');
      this.simpleToast();
    }
  }

  async simpleToast(){
    const toast = await this.toastController.create({
      message: 'Por favor llena todos los campos v:',
      duration: 2000
    });
    toast.present();
  }

  async coolToast() {
    const toast = await this.toastController.create({
      message: 'Por favor llena todos los campos',
      position: 'top',
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

 
  constructor(private router: Router, public toastController: ToastController) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
   
  }


}
