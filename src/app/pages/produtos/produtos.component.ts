import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../providers/produto.service';
import { ResponseProdutos } from '../../model/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  responseProdutos: ResponseProdutos;

  constructor( private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
    .subscribe(res => this.responseProdutos = res)
  }

}
