import { Component, OnInit } from '@angular/core';
import { CartService } from '../../providers/cart.service';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  produtos: Produto[] = [];

  ngOnInit() {
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

  total(): number{
    var totalCompra = 0;
    for(var produto of this.cartService.items){
      totalCompra += produto.produto.valor;
    }
    return totalCompra;
  }

}
