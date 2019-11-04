import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Login } from '../model/login';
import { JwtToken } from '../model/jwtToken';
import { Cliente } from '../model/cliente';

@Injectable()
export class AuthService{

    constructor(
      private http: HttpClient
    )
    {}
    
    login(auth: Login): Observable<JwtToken>{
      const api = `https://api-get-beer.herokuapp.com/auth/login`;
      return this.http.post<JwtToken>(api, auth).pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }

    me(): Observable<Cliente>{
      const api = `https://api-get-beer.herokuapp.com/me`
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${localStorage.getItem('currentUser')}`
        })
      }
      return this.http.get<Cliente | any>(api, httpOptions).pipe(
        retry(1),
        catchError(this.errorHandl),
        map( (response) => {
          const cliente: any = { //Trocar o tipo de retorno para Cliente
            usuario: response.username,
            //email: response.pessoa.email,
            //nome: response.pessoa.nome,
            //senha: '',
            //dataNascimento: response.dataNascimento,
            //cpf: response.cpf,
            //telefone: response.pessoa.telefone
          }
          console.log(cliente)
          return cliente;
        }),
      )
    }
    
    errorHandl(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        }
        else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //console.log(errorMessage);
        return throwError(errorMessage);
     }
}