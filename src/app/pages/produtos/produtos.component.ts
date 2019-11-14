import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../providers/produto.service';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  responseProdutos: Produto[];

  constructor( private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.findAll()
    .subscribe(res => this.responseProdutos = res)
  }

}
