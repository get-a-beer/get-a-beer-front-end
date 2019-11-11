import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {Produto} from '../model/produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url ="https://api-get-beer.herokuapp.com/cerveja";


  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto>{
    return this.http.get<Produto>(this.url).pipe(); 
  }

  createProduto(request:Produto): Observable<Produto>{
    return this.http.post<Produto>(this.url + '/',request).pipe();
  }


}
