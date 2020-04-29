import { ScrambleService } from './../../services/scramble.service';
import { CatalogsService } from './../../services/catalogs.service';
import { TourneysService } from './../../services/tourneys.service';
import { Component, OnInit } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-cubing',
  templateUrl: './cubing.page.html',
  styleUrls: ['./cubing.page.scss'],
})

export class CubingPage implements OnInit {

  hideComponents = false;

  cubesList: string[] = [];
  tourneysList: Tourney[] = [];
  scramble: Scramble = {
    sequence: [],
    rawSequence: '',
    scramblerId: ''
  };

  time = '00:00.00';
  previousTime = '00:00.00';

  readyInterval: any;
  solvingTimer: any;

  readyTime = 0;
  waitTime = 1;

  statsLeft = 'Media: N/A\nMejor: N/A\nPeor: N/A\nSolves: N/A';
  statsRight = 'Ao5: N/A\nAo12: N/A\nAo50: N/A\nAo100: N/A';

  selectedCube = '3x3x3';
  selectedTourney = 'Global';

  constructor(
    private catalogsApi: CatalogsService,   
    private scrambleApi: ScrambleService,
    private tourneysApi: TourneysService) { }

  ngOnInit() {
    this.catalogsApi.getCubesList().subscribe(
      res => {
        this.cubesList = res;
      }
    );

    this.tourneysApi.getTourneys().subscribe(
      res => {
        this.tourneysList = res;
      }
    );
  }

  ionViewWillEnter() {
    this.nextScramble();
  }
  
  onPressContent($event) {
    let txt_timer = document.getElementsByTagName('h1')[0];
    let timer_class = txt_timer.className;

    if (timer_class == "time-normal"){
      this.readyTime = 0;
      this.startWaiting();

    } else if (timer_class == "time-running") {
      this.stopTimer();
    }
  }

  onPressUpContent($event) {
    let txt_timer = document.getElementsByTagName('h1')[0];
    let timer_class = txt_timer.className;
    console.log("AQUI: " + timer_class);

    if (timer_class == "time-normal"){
      this.stopWaiting();
      
    } else if (timer_class == "time-ready") {
      this.startTimer();
    }
  }

  startWaiting() {
    this.previousTime = this.time;
    console.log(this.previousTime);
    const self = this;
    self.time = '00' + ':' + '00' + '.' + '00';

    this.readyInterval = setInterval(function () {
      self.readyTime = self.readyTime + 1;
      console.log(self.readyTime);
      
      if (self.readyTime >= self.waitTime){
        // Style when ready
        self.hideComponents = true;
        let txt_timer = document.getElementsByTagName('h1')[0];
        txt_timer.className = "time-ready";
      }
    }, 1000);
  }

  stopWaiting() {
    let txt_timer = document.getElementsByTagName('h1')[0];
    clearInterval(this.readyInterval);
    console.log(this.readyTime);
    if (this.readyTime < this.waitTime){    // not ready ):
      this.time = this.previousTime;
    } 
  }
  
  startTimer() {
    // Style when timing
    clearInterval(this.readyInterval);
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = "time-running";

    this.nextScramble();

    const t0 = performance.now();

    this.solvingTimer = setInterval( () => {
      const dif = performance.now() - t0;

      const seconds = Math.floor((dif / 1000) % 60);
      const minutes = Math.floor((dif / 1000 / 60) % 60);
      const ms = Math.floor(dif % 1000);

      const secondsStr = seconds < 10 ? ('0' + seconds) : seconds;
      const minutesStr = minutes < 10 ? ('0' + minutes) : minutes;
      const msStr = ms < 100 ? (ms < 10 ? ('00' + ms) : ('0' + ms))  : ms;

      this.time = minutesStr + ':' + secondsStr + '.' + String(msStr).substring(0,2);
    }, 10);
  }

  stopTimer() {
    clearInterval(this.solvingTimer);
    this.hideComponents = false;
    let txt_timer = document.getElementsByTagName('h1')[0];
     // let timer_class = txt_timer.getAttribute('class');
    txt_timer.className = "time-normal";
  }

  nextScramble() {
    this.scrambleApi.getScramble(this.selectedCube).subscribe(
      res => {
        this.scramble = res;
      }
    );
  }
}
