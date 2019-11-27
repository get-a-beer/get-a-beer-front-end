import { Component, OnInit } from '@angular/core';
import { CartService } from '../../providers/cart.service';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  produtos: Produto[] = [];
  show: boolean = false;
  
  ngOnInit() {
    let cartSession = sessionStorage.getItem("cart");
    if(cartSession != null){
     this.cartService.items = JSON.parse(cartSession);
    }

    this.produtos = this.items();  
  }

  open(){
    this.show = !this.show;
  }

  items(): Produto[] {
    return this.cartService.items;
  }

  removeItem(produto){
    let c = this.cartService
    return c.removeItem(produto)
  }

  total() :number{
    var totalCompra = 0;
    for(var produto of this.cartService.items){
      totalCompra += produto.produto.valor;
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
