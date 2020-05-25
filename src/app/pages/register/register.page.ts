import { ToastService } from '../../services/toast.service';
import { CatalogsService } from './../../services/catalogs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
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

  public myPhoto: any = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==";
  public image: any;
  public error: string;
  private loading: any;

  constructor(private router: Router,
              public toastService: ToastService,
              private catatalogsApi: CatalogsService,
              private userApi: UserService,
              private readonly loadingCtrl: LoadingController,
              private datePipe: DatePipe) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
   this.catatalogsApi.getStates().subscribe(
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
          this.uploadPhoto(this.response.entity.id, this.image);
          this.router.navigateByUrl('/');
        }
      }
    );
  }

  updateCitySelect() {
    console.log('change');
    this.catatalogsApi.getCitiesByState(this.user.stateId).subscribe(
      res => {
        this.cities = res;
      }
    );
  }

  selectPhoto(): void {
    const camera: any = navigator['camera'];
    camera.getPicture(imageData => {
      this.myPhoto = this.convertFileSrc(imageData);
      //this.uploadPhoto(imageData);
      this.image = imageData;
    }, error => this.error = JSON.stringify(error), {
      sourceType: camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: camera.EncodingType.JPEG,
    });
  }

  private convertFileSrc(url: string): string {
    if (!url) {
      return url;
    }
    if (url.startsWith('/')) {
      return window['WEBVIEW_SERVER_URL'] + '/_app_file_' + url;
    }
    if (url.startsWith('file://')) {
      return window['WEBVIEW_SERVER_URL'] + url.replace('file://', '/_app_file_');
    }
    if (url.startsWith('content://')) {
      return window['WEBVIEW_SERVER_URL'] + url.replace('content:/', '/_app_content_');
    }
    return url;
  }

  private async uploadPhoto(userId: number, imageFileUri: any) {
    this.error = null;
    this.loading = await this.loadingCtrl.create({
      message: 'Uploading...'
    });

    this.loading.present();

    window['resolveLocalFileSystemURL'](imageFileUri,
      entry => {
        entry['file'](file => this.readFile(userId, file));
      });
  }

  private readFile(userId: number, file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type});
      formData.append('file', imgBlob, file.name);
      this.userApi.uploadUserImg(userId, formData);
    };
    reader.readAsArrayBuffer(file);
  }

}
