import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
// import { RegisterPage } from 'src/app/pages/register/register.page'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  images: string[] = ['background_sign'];
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
 
  firstName = '';
  lastName ='';
  wcaid = '';
  nickname = '';
  email = '';
  password = '';
  addressState = '';
  addressCity = '';
  birthDate = '';
  getSignUpForm(){
    if(this.nickname && this.password){
      console.log("firstName:" + this.firstName);
      console.log("lastName:" + this.lastName);
      console.log("wcaid:" + this.wcaid);
      console.log("nickname:" + this.nickname);
      console.log("email:" + this.email);
      console.log("password:" + this.password);
      console.log("addressState:" + this.addressState);
      console.log("addressCity:" + this.addressCity);
      console.log("birthDay:" + this.birthDate);

      console.log("Navigating to / (login)")
      this.router.navigateByUrl('/');
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

}
