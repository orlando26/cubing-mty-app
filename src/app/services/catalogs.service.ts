import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  private uri = 'http://localhost:8080/catalog/';


  constructor(private http: HttpClient) { }

  getCubesList() {
    return this.http.get<string[]>(this.uri + 'cubes');
  }

  getStates() {
    return this.http.get<State[]>(this.uri + 'states');
  }

  getCitiesByState(stateId){
    return this.http.get<City[]>(this.uri + 'citiesByState/' + stateId);
  }
}
