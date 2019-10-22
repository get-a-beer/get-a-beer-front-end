import { Component, OnInit } from '@angular/core';
import { ResponseCreateProduto, RequestCreateProduto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/providers/produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  produto: RequestCreateProduto = {
    name: "",
    descricao: "",
    quantidade: 0,
    preco: 0,
    cervejaria:0
  };

  constructor(private ProdutoService: ProdutoService) { }

  ngOnInit() {

  }

  save(){
    console.log(this.produto);
    this.ProdutoService.createProduto(this.produto).subscribe(res => {
      console.log(res);
    });
  }
}
