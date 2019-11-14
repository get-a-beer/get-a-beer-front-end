import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../providers/produto.service';
import { Produto } from '../../model/produto.model';
import { CartService } from 'src/app/providers/cart.service';
import { Filtros } from 'src/app/model/filtros';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produto[];

  // TODO: Puxar da api
  categorias = [
    {
      nome: 'Leves',
      value: 'leves',
      qtd: 120
    },
    {
      nome: 'Maltadas',
      value: 'maltadas',
      qtd: 740
    },
    {
      nome: 'Lupuladas',
      value: 'lupuladas',
      qtd: 1450
    },
    {
      nome: 'Torradas',
      value: 'torradas',
      qtd: 578
    },
    {
      nome: 'Alcoolicas',
      value: 'alcoolicas',
      qtd: 120
    },
    {
      nome: 'Complexas',
      value: 'complexas',
      qtd: 740
    },
    {
      nome: 'Frutadas',
      value: 'frutadas',
      qtd: 40
    },
    {
      nome: 'Outras',
      value: 'outras',
      qtd: 10
    }
  ];

  filtros: Filtros = {
    categorias: [],
    valorMaiorQue: 0.0,
    valorMenorQue: 500.0
  };

  items: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private cartService: CartService) { }

  ngOnInit() {
    this.produtoService.findAll()
    .subscribe(res => this.produtos = res);
  }

  adicionarNoCarrinho(item: Produto) {
    this.items.push(item);
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  setFiltroCategoria(cat: string) {
    if (this.filtros.categorias.includes(cat)) {
      this.filtros.categorias = this.filtros.categorias.filter((c) => c !== cat);
    } else {
      this.filtros.categorias.push(cat);
    }

    this.updateProdutos();
  }

  updateProdutos() {
    this.produtoService.filter(this.filtros).subscribe((res: Produto[]) => {
      console.log(res);
      this.produtos = res;
    });
  }
}
