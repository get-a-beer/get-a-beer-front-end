import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import {CartService} from 'src/app/providers/cart.service';
import { Produto } from 'src/app/model/produto.model';
import { range } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  produtos: Produto[] = [];
  
  ngOnInit() {
    //Expandir e recolher carrinho:
    $(document).mouseup(function(e){   
      var obj = $(".dropdown");
    if (!obj.is(e.target) && obj.has(e.target).length === 1){
      console.log(e);
      $('.dropdown').addClass('open'); 
    }
    else{
      $('.dropdown').removeClass('open');
    }
  });

    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    if(cartSession != null){
     this.cartService.items = JSON.parse(cartSession);
    }

    this.produtos = this.items();  
  }

  items(): Produto[] {
    return this.cartService.items;
  }

  removeItem(Produto){
    let c = this.cartService
    return c.removeItem(Produto)
  }

  total() :number{
    var totalCompra = 0;
    for(var produto of this.cartService.items){
      totalCompra += parseFloat(produto.produto.valor);
    }
    return totalCompra;
  }

  totalIns() :number{
    return this.cartService.totalIns()
  }

  installments(){
    return this.cartService.installment()
  }
}
