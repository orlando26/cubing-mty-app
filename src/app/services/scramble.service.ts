
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrambleService {
  private uri = 'http://localhost:8080/api/v1/scramble/';

  constructor(private http: HttpClient) { }

  getScramble(cube:string){
    return this.http.get<Scramble>(this.uri + cube);
  }
}
