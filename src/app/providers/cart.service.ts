import { Injectable } from '@angular/core';
import {Produto} from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Produto[] = [];

  addItem(item:Produto){
    this.items.push(item)
    sessionStorage.setItem("cart",JSON.stringify(this.items))
  }

  removeItem(Produto){
    this.items.splice(this.items.indexOf(Produto), 1)
    //salva na sessão
    sessionStorage.setItem("cart",JSON.stringify(this.items))   
}

  total() :number{
    return this.items
    .map(item => item.produto.valor)
    .reduce((prev, value)=> prev+value, 0)
}
  totalIns():number{
     return this.items
    .map(item => item.produto.valor)
    .reduce((prev, value)=> prev+value, 0)   
}
  installment():number{
    return Math.max.apply(
        Math,this.items
        .map(function(prod){
        return prod.produto.valor;
    }))
  }
}
