import { Injectable } from '@angular/core';
import { Cervejaria } from '../model/cervejaria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CervejariaService {
  private api = 'https://api-get-beer.herokuapp.com/cervejaria';

  constructor(private http: HttpClient) {}

  signup(cervejaria: Cervejaria): Observable<Cervejaria> {
    return this.http.post<Cervejaria>(this.api, cervejaria);
  }

  findAll(): Observable<Cervejaria[]> {
    return this.http.get<Cervejaria[]>(this.api);
  }
}
