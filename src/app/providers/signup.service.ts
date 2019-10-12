import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Signup } from '../model/signup';

@Injectable()
export class SignupService{
    
    constructor(private http: HttpClient){}
    
    signup(body: Signup): Observable<Signup>{
      const api = `http://api-get-beer.herokuapp.com/cliente`;
      return this.http.post<Signup>(api, body).pipe(
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