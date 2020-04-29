import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SolvesService } from 'src/app/services/solves.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  type: string;
  selecteduserId = 2;
  selectedcube = "3x3x3";

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

  solve: Solve = {
    id: 1,
    userId: this.selecteduserId,
    time: 0,
    scramble: '',
    cube: '',
    dnf: true,
    plus2: false
  };


  constructor(private userApi: UserService, private solveApi: SolvesService) { }

  ngOnInit() {
    this.type = 'records';
    this.getUser();
    this.getBestSolve();
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

  getBestSolve() {
    this.solveApi.getBestSolve(this.selecteduserId, this.selectedcube).subscribe(
      res => {
        this.solve = res;
      }
    );
  }

}
