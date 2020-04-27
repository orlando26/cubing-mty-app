import { ScrambleService } from './../../services/scramble.service';
import { CatalogsService } from './../../services/catalogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubing',
  templateUrl: './cubing.page.html',
  styleUrls: ['./cubing.page.scss'],
})
export class CubingPage implements OnInit {

  time = '00.00.00';

  timer: any;

  cubesList: string[] = [];

  contentBg = 'init_bg';

  statsLeft = 'Media: N/A\nMejor: N/A\nPeor: N/A\nSolves: N/A';

  statsRight = 'Ao5: N/A\nAo12: N/A\nAo50: N/A\nAo100: N/A';

  scramble: Scramble = {
    sequence: [],
    rawSequence: '',
    scramblerId: ''
  };

  selectedCube = '3x3x3';

  constructor(private catalogsApi: CatalogsService, private scrambleApi: ScrambleService) { }

  ngOnInit() {
    this.catalogsApi.getCubesList().subscribe(
      res => {
        this.cubesList = res;
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
    console.log('ready...');
    document.body.style.setProperty('--my-var', 'var(--ion-color-success)');
  }

  stopTimer() {
    console.log('stop...');
    document.body.style.setProperty('--my-var', 'var(--ion-color-danger)');

    clearInterval(this.timer);
    this.nextScramble();
  }

}
