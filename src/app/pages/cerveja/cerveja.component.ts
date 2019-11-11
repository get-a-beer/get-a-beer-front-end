import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/providers/produto.service';
import { Produto } from '../../model/produto.model';
import { query } from '@angular/animations';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.css']
})
export class CervejaComponent implements OnInit {
  produtos: Produto;
  id: number;
  constructor(private produtoService: ProdutoService ,private route: ActivatedRoute) { }
  
  images = ["product03_p9gojs", "product02_usctfi", "product01_xe6vs5"].map((n) => `https://res.cloudinary.com/getabeer/image/upload/${n}`);
  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: any) =>{
        this.id = queryParams['id'];
      }
    );

    this.produtoService.findOne(this.id)
    .subscribe(res => this.produtos = res);
    
  }

}
