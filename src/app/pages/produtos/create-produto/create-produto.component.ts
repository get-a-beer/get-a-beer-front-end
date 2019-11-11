import { Component, OnInit } from '@angular/core';
import { Produto} from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/providers/produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nome: "",
    descricao:"",
    valor: 0,
    qtdDisponivel: 0,
    temperatura: 0,
    cor: "",
    teorAlcolico: 0,
    harmonizacao: "",
    idCervejaria: 0
  }

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
