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

  s3x3: Solve[] = [this.solve];
  s2x2: Solve[] = [this.solve];
  s4x4: Solve[] = [this.solve];
  s5x5: Solve[] = [this.solve];
  s6x6: Solve[] = [this.solve];
  s7x7: Solve[] = [this.solve];
  smega: Solve[] = [this.solve];
  spyra: Solve[] = [this.solve];
  sskewb: Solve[] = [this.solve];
  ssq1: Solve[] = [this.solve];

  constructor(private userApi: UserService, private solveApi: SolvesService) {
  }

  ngOnInit() {
    this.type = 'records';
    this.getUser();
    this.getBestSolve();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getBestSolve();
      event.target.complete();
    }, 2000);
  }

  getUser() {
    this.userApi.getUser(this.selecteduserId).subscribe(
      res => {
        this.user = res;
      }
    );
  }

  getBestSolve() {
    this.solveApi.getBestSolve(this.selecteduserId, "3x3x3").subscribe(
      res => {
        if (res.length!=0){
        this.s3x3 = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "2x2x2").subscribe(
      res => {
        if (res.length!=0){
        this.s2x2 = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "4x4x4").subscribe(
      res => {
        if (res.length!=0){
        this.s4x4 = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "5x5x5").subscribe(
      res => {
        if (res.length!=0){
        this.s5x5 = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "6x6x6").subscribe(
      res => {
        if (res.length!=0){
        this.s6x6 = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "7x7x7").subscribe(
      res => {
        if (res.length!=0){
        this.s7x7 = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "MEGAMINX").subscribe(
      res => {
        if (res.length!=0){
       this.smega = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "PYRAMINX").subscribe(
      res => {
        if (res.length!=0){
        this.spyra = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "SKEWB").subscribe(
      res => {
        if (res.length!=0){
        this.sskewb = res;
        }
      }
    );

    this.solveApi.getBestSolve(this.selecteduserId, "SQUARE-1").subscribe(
      res => {
        if (res.length!=0){
        this.ssq1 = res;
        }
      }
    );

  }

}
