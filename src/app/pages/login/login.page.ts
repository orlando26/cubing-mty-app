import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  images: string[] = ['background-01', 'background-02', 'background-03', 'background-04']
  className: string = this.images[0];

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

  ionViewWillEnter(){
   
  }


}
