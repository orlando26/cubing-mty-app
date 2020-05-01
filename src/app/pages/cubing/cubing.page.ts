import { ScrambleService } from './../../services/scramble.service';
import { CatalogsService } from './../../services/catalogs.service';
import { TourneysService } from './../../services/tourneys.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SolveService } from './../../services/solve.service';
import { ToastService } from '../../services/toast.service';

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

  solve: Solve = {
    cube: '',
    date: '',
    dnf: false,
    plus2: false,
    id: 0,
    scramble: '',
    time: 0,
    timeStr: '',
    userId: 1,
  }

  response: any = {
    entity: {},
    responsetext: '',
    status: ''
  };

  hideComponents = false;

  time = '00:00.00';
  previousTime = '00:00.00';
  nonPenaltyTime = '00:00.00';

  allowDelete = false;

  readyInterval: any;
  solvingTimer: any;

  waitedTime = 0;
  time2wait = 0.5;

  statsLeft = 'Media: N/A\nMejor: N/A\nPeor: N/A\nSolves: N/A';
  statsRight = 'Ao5: N/A\nAo12: N/A\nAo50: N/A\nAo100: N/A';

  selectedCube = '3x3x3';
  selectedTourney = 'Global';

  constructor(
    private catalogsApi: CatalogsService,   
    private scrambleApi: ScrambleService,
    private tourneysApi: TourneysService,
    private solveApi: SolveService,
    public toastService: ToastService,
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
  
  onTouchArea() {
    let txt_timer = document.getElementsByTagName('h1')[0];
    let timer_class = txt_timer.className;

    if (timer_class == 'time-normal'){
      txt_timer.className = 'time-notReady';
      this.startWaiting();

    } else if (timer_class == 'time-running') {
      this.stopTimer();
    }
  }

  onReleaseArea() {
    let txt_timer = document.getElementsByTagName('h1')[0];
    let timer_class = txt_timer.className;

    if (timer_class == 'time-notReady'){
      this.stopWaiting();
      
    } else if (timer_class == 'time-ready') {
      console.log('\nPREVIOUS TIME: ' + this.previousTime);

      if (this.previousTime != '00:00.00'){
        this.sendSolve();
      }

      this.startTimer();
      this.nextScramble();
      this.solve.dnf = false;
      this.solve.plus2 = false;
    }
  }

  startWaiting() {
    this.waitedTime = 0;

    if (this.time == 'DNF'){
      this.previousTime = this.nonPenaltyTime;
    } else {
      this.previousTime = this.time;
    }
    console.log(this.previousTime);
    const self = this;
    self.time = '00' + ':' + '00' + '.' + '00';

    this.readyInterval = setInterval(function () {
      self.waitedTime = self.waitedTime + 0.5;
      
      if (self.waitedTime >= self.time2wait){
        self.hideComponents = true;
        let txt_timer = document.getElementsByTagName('h1')[0];
        txt_timer.className = 'time-ready';
      }
    }, 500);
  }

  stopWaiting() {
    let txt_timer = document.getElementsByTagName('h1')[0];
    clearInterval(this.readyInterval);

    if (this.waitedTime < this.time2wait){
      this.time = this.previousTime;
      txt_timer.className = 'time-normal';
    } 
  }
  
  startTimer() {
    clearInterval(this.readyInterval);
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = 'time-running';

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
    txt_timer.className = 'time-normal';

    this.solve.dnf = false;
    this.solve.plus2 = false;
    this.allowDelete = true;

    var solvedNow = new Date();
    this.solve.date = solvedNow.toISOString();
  }

  sendSolve() {
    this.solve.timeStr = this.previousTime;
    this.solve.time = this.timeStr2ms(this.previousTime);
    console.log(this.solve.time);

    this.solveApi.saveSolve(this.solve).subscribe(
      res => {
        this.response = res;
        console.log(this.response);
        this.toastService.simpleToast(this.response.responsetext);
      }
    );
  }

  nextScramble() {
    var idClicked =(<HTMLInputElement>event.srcElement).id;
    console.log(idClicked);
    
    if (idClicked != 'reload-icon' && idClicked != 'cube-selector'){
      this.solve.scramble = this.scramble.rawSequence;
      this.solve.cube = this.selectedCube;
    }    
    console.log('PREVIOUS SCRAM: ' + this.solve.scramble);
    console.log('PREVIOUS CUBE: ' + this.solve.cube);
    console.log('CURRENT CUBE: ' + this.selectedCube);

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
                this.solve.dnf = false;
                this.solve.plus2 = false;
                this.allowDelete = false;
                console.log('Delete clicked');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  dnfSolve(){
    if (this.solve.plus2){            // mutually exclusive
      this.solve.plus2 = false;
      this.time = this.nonPenaltyTime;
    }

    if (this.solve.dnf){
      this.solve.dnf = false;
      this.time = this.nonPenaltyTime;

    } else if (this.time != '00:00.00'){
      this.solve.dnf = true;
      this.nonPenaltyTime = this.time;
      this.time = 'DNF';
    }
    console.log('\nNON-PENALTY TIME: ' + this.nonPenaltyTime);
    console.log('DNF: ' + this.solve.dnf);
    console.log('+2: ' + this.solve.plus2);
  }

  plus2Solve(){
    if (this.solve.dnf){            // mutually exclusive
      this.solve.dnf = false;
      this.time = this.nonPenaltyTime;
    }

    if (this.solve.plus2) {
      this.solve.plus2 = false;
      this.time = this.nonPenaltyTime;

    } else if (this.time != '00:00.00'){
      this.nonPenaltyTime = this.time;
      this.solve.plus2 = true;

      let seconds_int = parseInt(this.time.substring(3,5)) + 2;
      let minutes_int = parseInt(this.time.substring(0,2));

      if (seconds_int >= 60){
        seconds_int = seconds_int - 60;
        minutes_int = minutes_int + 1;
      }

      // Left padding with zeros
      let seconds_str = ('00' + String(seconds_int)).slice(-2)
      let minutes_str = ('00' + String(minutes_int)).slice(-2);

      this.time = (minutes_str + ':' +
                   seconds_str + '.' + 
                   this.time.substring(6,8));
    } 
    console.log('\nNON-PENALTY TIME: ' + this.nonPenaltyTime);
    console.log('DNF: ' + this.solve.dnf);
    console.log('+2: ' + this.solve.plus2);
  }

  timeStr2ms(time_string){
    let minutes_int = parseInt(time_string.substring(0,2));
    let seconds_int = parseInt(time_string.substring(3,5));
    let millisecons_int = parseInt(time_string.substring(6,8));
    
    return((minutes_int*60 + seconds_int)*1000 + millisecons_int);
  }
}
