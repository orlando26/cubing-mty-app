import { ScrambleService } from './../../services/scramble.service';
import { CatalogsService } from './../../services/catalogs.service';
import { TourneysService } from './../../services/tourneys.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cubing',
  templateUrl: './cubing.page.html',
  styleUrls: ['./cubing.page.scss'],
})

export class CubingPage implements OnInit {

  cubesList: string[] = [];
  tourneysList: Tourney[] = [];
  scramble: Scramble = {
    sequence: [],
    rawSequence: '',
    scramblerId: ''
  };

  hideComponents = false;

  time = '00:00.00';
  previousTime = '00:00.00';

  nonPenaltyTime = '00:00.00';
  dnf = false;
  plus2 = false;
  delete = false;

  readyInterval: any;
  solvingTimer: any;

  readyTime = 0;
  waitTime = 0.5;

  statsLeft = 'Media: N/A\nMejor: N/A\nPeor: N/A\nSolves: N/A';
  statsRight = 'Ao5: N/A\nAo12: N/A\nAo50: N/A\nAo100: N/A';

  selectedCube = '3x3x3';
  selectedTourney = 'Global';

  constructor(
    private catalogsApi: CatalogsService,   
    private scrambleApi: ScrambleService,
    private tourneysApi: TourneysService,
    public alertController: AlertController) { }

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

    if (timer_class == 'time-normal'){
      this.readyTime = 0;
      txt_timer.className = 'time-notReady';
      this.startWaiting();

    } else if (timer_class == 'time-running') {
      this.stopTimer();
      this.dnf = false;
      this.plus2 = false;
      this.delete = true;
    }
  }

  onPressUpContent($event) {
    let txt_timer = document.getElementsByTagName('h1')[0];
    let timer_class = txt_timer.className;

    if (timer_class == 'time-notReady'){
      this.stopWaiting();
      
    } else if (timer_class == 'time-ready') {
      this.startTimer();
      this.dnf = false;
      this.plus2 = false;
    }
  }

  startWaiting() {
    this.previousTime = this.time;
    const self = this;
    self.time = '00' + ':' + '00' + '.' + '00';

    this.readyInterval = setInterval(function () {
      self.readyTime = self.readyTime + 0.5;
      
      if (self.readyTime >= self.waitTime){
        self.hideComponents = true;
        let txt_timer = document.getElementsByTagName('h1')[0];
        txt_timer.className = 'time-ready';
      }
    }, 500);
  }

  stopWaiting() {
    let txt_timer = document.getElementsByTagName('h1')[0];
    clearInterval(this.readyInterval);

    if (this.readyTime < this.waitTime){
      this.time = this.previousTime;
      txt_timer.className = 'time-normal';
    } 
  }
  
  startTimer() {
    clearInterval(this.readyInterval);
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = 'time-running';

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
    txt_timer.className = 'time-normal';
  }

  nextScramble() {
    this.scrambleApi.getScramble(this.selectedCube).subscribe(
      res => {
        this.scramble = res;
      }
    );
  }

  async deleteSolve(){
    if (this.time != '00:00.00'){
      const alert = await this.alertController.create({
        message: '¿Quieres borrar el solve?',
        subHeader: 'Tiempo: ' + String(this.time),
        buttons: ['Cancelar',
          {
            text: 'Borrar',
            handler: () => {
                this.time = '00:00.00';
                this.dnf = false;
                this.plus2 = false;
                this.delete = false;
                console.log('Delete clicked');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  plus2Solve(){
    if (this.dnf){
      this.dnf = false;
      this.time = this.nonPenaltyTime;
    }

    if (this.time != '00:00.00' && !this.plus2){
      this.nonPenaltyTime = this.time;
      this.plus2 = true;

      let seconds_int = parseInt(this.time.substring(3,5)) + 2;
      let minutes_int = parseInt(this.time.substring(0,2));

      if (seconds_int >= 60){
        seconds_int = seconds_int - 60;
        minutes_int = minutes_int + 1;
      }

      let seconds_str = ('00' + String(seconds_int)).slice(-2)
      let minutes_str = ('00' + String(minutes_int)).slice(-2);
      this.time = (minutes_str + ':' +
                   seconds_str + '.' + 
                   this.time.substring(6,8));
      
    } else if (this.plus2) {
      this.plus2 = false;
      this.time = this.nonPenaltyTime;
    }

    console.log('Non Penalty time: ' + this.nonPenaltyTime);
    console.log('DNF: ' + this.dnf);
    console.log('+2: ' + this.plus2);
  }

  dnfSolve(){
    if (this.plus2){
      this.plus2 = false;
      this.time = this.nonPenaltyTime;
    }

    if (this.time != '00:00.00' && !this.dnf){
      this.dnf = true;
      this.nonPenaltyTime = this.time;
      this.time = 'DNF';

    } else if (this.dnf){
      this.dnf = false;
      this.time = this.nonPenaltyTime;
    }

    console.log('Non Penalty time: ' + this.nonPenaltyTime);
    console.log('DNF: ' + this.dnf);
    console.log('+2: ' + this.plus2);
  }

  changeTourney(){
    // this.tourneysApi.getTourneys(this.selectedTourney).subscribe(
    //   res => {
    //     this.khe = res;
    //   }
    // );
  }
}
