import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {ResponseProdutos} from '../model/produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url ="";
  
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<ResponseProdutos>{
    console.log(this.http.get<ResponseProdutos>(this.url));
    return this.http.get<ResponseProdutos>(this.url);
    
  }
}
