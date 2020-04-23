import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
