import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPage } from '../register/register.page';

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
      this.router.navigateByUrl('/home');
    }else{
      console.log("Empty fields");
      alert('Por favor llena todos los campos v:');
    }
  }
 
  constructor(private router: Router) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
   
  }


}
