import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Produto } from '../model/produto.model';
import { HttpClient } from '@angular/common/http';
import { Filtros } from '../model/filtros';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'https://api-get-beer.herokuapp.com/cerveja';


  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url).pipe();
  }

  createProduto(request: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.url + '/', request).pipe();
  }

  findOne(id: number): Observable<Produto>{
    return this.http.get<Produto>(this.url + `/${id}`).pipe();
  }

  filter(filtros: Filtros): Observable<Produto> | any {
    let params = '';

    if (filtros.nome) {
      params = `${params}nome=${filtros.nome}&`;
    }

    if (filtros.valorMaiorQue) {
      params = `${params}valorMaiorQue=${filtros.valorMaiorQue}&`;
    }

    if (filtros.valorMenorQue) {
      params = `${params}valorMenorQue=${filtros.valorMenorQue}&`;
    }

    if (filtros.categorias) {
      filtros.categorias.map((categoria) => {
        params = `${params}categoria=${categoria}&`;
      });
    }

    params = params.slice(0, -1);
    console.log(params);
    return this.http.get<Produto[]>(`${this.url}?${params}`);
  }

}
