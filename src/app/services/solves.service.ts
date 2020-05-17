import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolvesService {
  private uri = 'http://localhost:8080/api/v1/solve/';

  header = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getBestSolve(userId: number, cube: string){
    return this.http.get<Solve[]>(this.uri + 'bestbyUserAndCube/' + userId +  ',' + cube);
  }

  getByCubeAndUser(cube, userId, order) {
    return this.http.get<Solve[]>(this.uri + 'byUser/' + userId + '/cube/' + cube + '?order=' + order);
  }
}
