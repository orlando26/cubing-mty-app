import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  type: string;
  user: User = {
    userId: 1,
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    wcaId: '',
    stateId: 0,
    cityId: 0,
    birthday: '',
    image: '',
    password: '',
    roles: []
  };

  selecteduserId = 2;

  constructor(private userApi: UserService) { }

  ngOnInit() {
    this.type = 'records';
    this.getUser();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  getUser() {
    this.userApi.getUser(this.selecteduserId).subscribe(
      res => {
        this.user = res;
      }
    );
  }

}
