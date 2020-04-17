import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  images: string[] = ['background-01', 'background-02', 'background-03', 'background-04']
  className: string = this.images[0];
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   
  }

 

}
