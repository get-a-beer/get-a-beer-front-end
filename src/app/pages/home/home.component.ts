import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../providers/produto.service';
import { Produto } from '../../model/produto.model';
import { CartService } from 'src/app/providers/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produto;

  constructor( private produtoService: ProdutoService, private cartService: CartService) { }
  items: Produto[] = [];

  ngOnInit() {
    this.produtoService.findAll()
    .subscribe(res => this.produtos = res);
  }

  adicionarNoCarrinho(item:Produto){
    this.items.push(item);
    sessionStorage.setItem("cart",JSON.stringify(this.items));
    console.log(sessionStorage);
  }
}
