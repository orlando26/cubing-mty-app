import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'http://localhost:8080/api/v1/user/';

  header = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  saveUser(user: User) {
    this.http.post(this.uri + 'registration', JSON.stringify(user), this.header);
  }
}
