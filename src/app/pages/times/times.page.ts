import { SolvesService } from './../../services/solves.service';
import { Component, OnInit } from '@angular/core';
import { ScrambleService } from 'src/app/services/scramble.service';
import { CatalogsService } from 'src/app/services/catalogs.service';
import { PopoverController } from '@ionic/angular';
import { SolveOptionsComponent } from 'src/app/components/solve-options/solve-options.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.page.html',
  styleUrls: ['./times.page.scss'],
})
export class TimesPage implements OnInit {

  solves: Solve[];

  selectedCube = '3x3x3';

  cubesList: string[] = [];

  order = 'time';

  constructor(private solvesApi: SolvesService,
              private catalogsApi: CatalogsService,
              private popoverController: PopoverController,
              private userApi: UserService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.catalogsApi.getCubesList().subscribe(
      res => {
        this.cubesList = res;
      }
    );
    this.solvesApi.getByCubeAndUser(this.selectedCube, this.userApi.currentUser.id, this.order).subscribe(
      res => {
        this.solves = res;
      }
    );
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SolveOptionsComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  orderByTime() {
    this.order = 'time';
    this.ionViewWillEnter();
  }

  orderByDate() {
    this.order = 'date';
    this.ionViewWillEnter();
  }

  changeCube(){
    this.ionViewWillEnter();
  }

}
