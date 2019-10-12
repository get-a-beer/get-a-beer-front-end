import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Signup } from '../model/signup';

@Injectable()
export class AuthService{
    
    constructor(private http: HttpClient){}
    
    login(auth: Signup): Observable<Signup>{
      const api = `https://ptsv2.com/t/rlyxg-1570570670/post`;
      return this.http.post<Signup>(api, auth).pipe(
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
        console.log(errorMessage);
        return throwError(errorMessage);
     }
}