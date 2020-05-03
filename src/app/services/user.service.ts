import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'http://localhost:8080/api/v1/user/';

  public currentUser: User = {
    id: 1,
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

  header = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  response: any = {
    entity: {},
    status: '',
    responsetext: ''
  };

  constructor(private http: HttpClient, private toastService: ToastService, private router: Router) { }

  saveUser(user: User) {
    return this.http.post(this.uri + 'registration', JSON.stringify(user), this.header);
  }

  getUser(userId: number){
    return this.http.get<User>(this.uri + userId);
  }
  
  authenticate(user, pass) {
    const authUser = {
      username: user,
      password: pass
    };
    this.http.post(this.uri + 'authenticate', JSON.stringify(authUser), this.header).subscribe(
      res => {
        this.response = res;
        if(this.response.status === 'SUCCESS') {
          this.currentUser = this.response.entity;
          this.router.navigateByUrl('/home');
        }else {
          this.toastService.simpleToast(this.response.responsetext);
        }
      }
    );
  }
}
