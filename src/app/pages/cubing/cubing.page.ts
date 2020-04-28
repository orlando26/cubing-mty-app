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

  hideComponents = false;

  cubesList: string[] = [];
  tourneysList: Tourney[] = [];
  scramble: Scramble = {
    sequence: [],
    rawSequence: '',
    scramblerId: ''
  };

  time = '00:00.000';
  timer: any;

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

  nextScramble() {
    this.scrambleApi.getScramble(this.selectedCube).subscribe(
      res => {
        this.scramble = res;
      }
    );
  }

  changeTourney() {
  }

  startTimer() {

    // Style when timing
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = "content time-running";
    
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

    this.time = '00' + ':' + '00' + '.' + '000';

    // Style when ready
    this.hideComponents = true;
    let txt_timer = document.getElementsByTagName('h1')[0];
    txt_timer.className = "content time-ready";

  }
  
  clickContent(event: any) {
  
    let clicked: string = (event.target as Element).getAttribute('name');

    let timer_area =["timing_content", "timing_timer", "timing_card", 
                     "timing_col", "timing_div"];

    if (timer_area.indexOf(clicked) > -1){  

      console.log('CLICKED ON TIMING AREA...');

      clearInterval(this.timer);

      // Style when stop
      this.hideComponents = false;
      let txt_timer = document.getElementsByTagName('h1')[0];
      let timer_class = txt_timer.getAttribute('class');

      if (timer_class == "content time-running") {
        this.nextScramble();
      }
      txt_timer.className = "content time-normal";

    } else {
      console.log('CLICKED ON OTHER AREA...');
    }
  }

  readyTime: number = 0;
  interval: any;
  previousTime = '00:00.000';
  waitTime = 1;
    onPressTimingArea($event) {

        this.previousTime = this.time;
        this.time = '00' + ':' + '00' + '.' + '000';    // reset timer

        this.readyTime = 0;
        this.startReadyTime();

        console.log("onPress");
        console.log(this.readyTime);
    }

    onPressUpTimingArea($event) {

        this.stopReadyTime();
        
        console.log("onPressUp");
        console.log(this.readyTime);
    }

    
    startReadyTime() {
        const self = this;
        this.interval = setInterval(function () {
            self.readyTime = self.readyTime + 1;
            
            console.log(self.readyTime);
            if (self.readyTime >= self.waitTime){                        // Style when ready
                self.hideComponents = true;
                let txt_timer = document.getElementsByTagName('h1')[0];
                txt_timer.className = "content time-ready";
            }
        }, 1000);
    }

    stopReadyTime() {
      clearInterval(this.interval);
      if (this.readyTime < this.waitTime){                                   // not ready ):
        this.time = this.previousTime;
        console.log("NOT READY")

      } else {                                                   // ready :3
        
        

        
        // Style when timing
        let txt_timer = document.getElementsByTagName('h1')[0];
        txt_timer.className = "content time-running";
        
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
    }

}
