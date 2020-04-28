import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  type: string;

  constructor() { }

  ngOnInit() {
    this.type = 'records';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
