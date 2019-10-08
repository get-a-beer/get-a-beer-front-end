import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Viacep } from '../model/viacep';

@Injectable()
export class ViaCepService{
    
    constructor(private http: HttpClient){}
    
    getCep(cep: number): Observable<Viacep>{
        const api = `https://viacep.com.br/ws/${cep}/json/`;
        return this.http.get<Viacep>(api).pipe(
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