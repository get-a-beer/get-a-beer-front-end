import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Login } from '../model/login';
import { JwtToken } from '../model/jwtToken';

@Injectable()
export class AuthService{
    
    constructor(private http: HttpClient){}
    
    login(auth: Login): Observable<JwtToken>{
      const api = `http://api-get-beer.herokuapp.com/auth/login`;
      return this.http.post<JwtToken>(api, auth).pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }
    
    errorHandl(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //console.log(errorMessage);
        return throwError(errorMessage);
     }
}