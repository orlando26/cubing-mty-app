
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrambleService {
  private uri = 'http://ec2-3-93-216-228.compute-1.amazonaws.com:8080/api/v1/scramble/';

  constructor(private http: HttpClient) { }

  getScramble(cube: string) {
    return this.http.get<Scramble>(this.uri + cube);
  }
}
