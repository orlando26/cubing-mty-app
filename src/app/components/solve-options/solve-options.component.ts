import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-solve-options',
  templateUrl: './solve-options.component.html',
  styleUrls: ['./solve-options.component.scss'],
})
export class SolveOptionsComponent implements OnInit {

  solveId;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.solveId = this.navParams.get('solveId');
  }

  plus2() {
  }

  dnf() {

  }

  delete() {

  }

}
