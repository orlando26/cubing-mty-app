
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourneysService {
  private uri = 'http://localhost:8080/api/v1/tourney/';

  constructor(private http: HttpClient) { }

  getTourneys(){
    return this.http.get<Tourney[]>(this.uri);
  }
}
