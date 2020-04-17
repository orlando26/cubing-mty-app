import { ScrambleService } from './../../services/scramble.service';
import { CatalogsService } from './../../services/catalogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubing',
  templateUrl: './cubing.page.html',
  styleUrls: ['./cubing.page.scss'],
})
export class CubingPage implements OnInit {

  cubesList:string[] = [];

  scramble:Scramble= {
    sequence: [],
    rawSequence: '',
    scramblerId: ''
  };

  selectedCube:string = "3x3x3";   

  constructor(private catalogsApi: CatalogsService, private scrambleApi: ScrambleService) { } 

  ngOnInit() {
    this.catalogsApi.getCubesList().subscribe(
      res => {
        this.cubesList = res;
      }
    );
  }

  ionViewWillEnter(){
    this.scrambleApi.getScramble(this.selectedCube).subscribe(
      res => {
        this.scramble = res;
      }
    );
  }

  nextScramble(){
    this.ionViewWillEnter();
  }

}
