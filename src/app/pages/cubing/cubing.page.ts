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

  contentBg = "yellow-bg";

  text1 = "Best: N/A\nAVG 5: N/A\nAVG 12: N/A\nAVG 50: N/A"

  text2 = "Worst: N/A\nAVG 100: N/A\nAVG 1000: N/A\nSolves: N/A"

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

  ready(){
    console.log('ready...');
    document.body.style.setProperty('--my-var', 'var(--ion-color-success)');
  }

  stopTimer(){
    console.log('stop...');
    document.body.style.setProperty('--my-var', 'var(--ion-color-danger)');
  }

}
