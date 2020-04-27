import { ScrambleService } from './../../services/scramble.service';
import { CatalogsService } from './../../services/catalogs.service';
import { TourneysService } from './../../services/tourneys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubing',
  templateUrl: './cubing.page.html',
  styleUrls: ['./cubing.page.scss'],
})
export class CubingPage implements OnInit {

  time = '00.00.00';
  timer: any;

  hideComponents = false;

  cubesList: string[] = [];

  tourneys: Tourney[] = [];
  // tourneys: Tourney = {
  //   id: 0,
  //   name: '',
  //   startDate: '',
  //   endDate: ''
  // };

  statsLeft = 'Media: N/A\nMejor: N/A\nPeor: N/A\nSolves: N/A';
  statsRight = 'Ao5: N/A\nAo12: N/A\nAo50: N/A\nAo100: N/A';

  scramble: Scramble = {
    sequence: [],
    rawSequence: '',
    scramblerId: ''
  };

  selectedCube = '3x3x3';

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
        this.tourneys = res;
      }
    );
  }

  ionViewWillEnter() {
    this.nextScramble();
  }

  nextScramble() {
    this.scrambleApi.getScramble(this.selectedCube).subscribe(
      res => {
        this.scramble = res;
      }
    );
  }

  startTimer() {

    // Style when timing
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = "content time-running";
    
    let timer_class = txt_timer.getAttribute('class');
    console.log("CLASS: "+ timer_class);
    
    this.nextScramble();

    const t0 = performance.now();

    this.timer = setInterval( () => {
      const dif = performance.now() - t0;

      const seconds = Math.floor((dif / 1000) % 60);
      const minutes = Math.floor((dif / 1000 / 60) % 60);
      const ms = Math.floor(dif % 1000);

      const secondsStr = seconds < 10 ? ('0' + seconds) : seconds;
      const minutesStr = minutes < 10 ? ('0' + minutes) : minutes;
      const msStr = ms < 100 ? (ms < 10 ? ('00' + ms) : ('0' + ms))  : ms;

      this.time = minutesStr + ':' + secondsStr + '.' + msStr;
    }, 10);
  }

  ready() {
    console.log('READY...');

    // Style when ready
    this.hideComponents = true;
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = "content time-ready";

    let timer_class = txt_timer.getAttribute('class');
    console.log("CLASS: "+ timer_class);
  }
  
  clickContent(event: any) {
    let clicked: string = (event.target as Element).getAttribute('name');

    let timer_area =["timing_content", "timing_timer", "timing_card", 
                     "timing_col", "timing_div"];

    if (timer_area.indexOf(clicked) > -1){  // if null

      console.log('CLICKED ON TIMING AREA...');
      document.body.style.setProperty('--my-var', 'var(--ion-color-danger)');

      clearInterval(this.timer);
      this.nextScramble();

      // Style when stop
      this.hideComponents = false;
      let txt_timer = document.getElementsByTagName('h1')[0];
      txt_timer.className = "content time-normal";
      
      let timer_class = txt_timer.getAttribute('class');
      console.log("CLASS: "+ timer_class);

      for (let tourney in this.tourneys){
        console.log("TOURNEYS: " + tourney);
      }

      
    } else {
      console.log('CLICKED ON OTHER AREA...');
    }
  }

}
