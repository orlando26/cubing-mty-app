import { ToastService } from '../../services/toast.service';
import { CatalogsService } from './../../services/catalogs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';
// import { RegisterPage } from 'src/app/pages/register/register.page'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [DatePipe]
})

export class RegisterPage implements OnInit {
  images: string[] = ['background_sign'];
  pagesSign: string = this.images[0]; 

  states: State[] = [];
  cities: City[] = [];

  user: User = {
    id: 0,
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    wcaId: '',
    stateId: 0,
    cityId: 0,
    birthday: '',
    image: '',
    password: '',
    roles: []
  };

  response: any = {
    entity: {},
    status: '',
    responsetext: ''
  };

  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router,
              public toastService: ToastService,
              private catatalogsApi: CatalogsService,
              private userApi: UserService,
              private datePipe: DatePipe) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
   this.catalogsApi.getStates().subscribe(
     res => {
       this.states = res;
     }
   );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  getSignUpForm() {
    let bd = new Date(this.user.birthday);
    this.user.birthday = this.datePipe.transform(bd, 'dd/MM/yyyy HH:mm');
    this.userApi.saveUser(this.user).subscribe(
      res => {
        this.response = res;

        console.log(this.response);

        this.toastService.simpleToast(this.response.responsetext);

        if(this.response.status === 'SUCCESS') {
          console.log('success');
          this.router.navigateByUrl('/');
        }
      }
    );
  }

  updateCitySelect() {
    console.log('change');
    this.catalogsApi.getCitiesByState(this.user.stateId).subscribe(
      res => {
        this.cities = res;
      }
    );
  }

}
