import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPage } from '../register/register.page';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

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


  constructor(private router: Router, private userApi: UserService) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
   
  }


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
  getCredentials() {
    this.userApi.authenticate(this.nickname, this.password);
  }

}
