import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../model/cliente';

@Injectable()
export class ClienteService{
    
    constructor(private http: HttpClient){}
    
    create(body: Cliente): Observable<Cliente>{
      const api = `http://api-get-beer.herokuapp.com/cliente`;
      return this.http.post<Cliente>(api, body).pipe(
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