import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolveService {
  private uri = 'http://localhost:8080/api/v1/solve/';

  header = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  saveSolve(solve: Solve) {
    return this.http.post(this.uri + 'saveSolve', JSON.stringify(solve), this.header);
  }
}