import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Cliente } from '../model/cliente';

@Injectable()
export class ClienteService{
    constructor(private http: HttpClient){}

    private api = `https://api-get-beer.herokuapp.com/cliente/`;

    create(body: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(this.api, body).pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }

    update(body: Cliente, id: number): Observable<Cliente>{
      return this.http.put<Cliente>(this.api + `${id}`, body).pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }

    findAll(): Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.api).pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }

    findOne(id: number): Observable<Cliente>{
      return this.http.get<Cliente | any>(this.api + `${id}`).pipe(
        retry(1),
        catchError(this.errorHandl),
        map( (response) => {
          const cliente: Cliente = {
            usuario: response.pessoa.usuario.usuario,
            email: response.pessoa.email,
            nome: response.pessoa.nome,
            senha: '',
            dataNascimento: response.dataNascimento,
            cpf: response.cpf,
            telefone: response.pessoa.telefone
          };
          return cliente;
        }),
      )
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