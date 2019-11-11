import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare let paypal: any;
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements AfterViewChecked {

  constructor(private router: Router) { }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  totalValue: number = 30 // Esse valor total deve ser retornado pela api;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AZsYQ4Z9NRz1Tv89S4f9niphYUNySawGNS0JHRTE3srjNH7_J9yb_YtwX-UgxDnO8WKe6oI-CIHaO5ns'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.totalValue, currency: 'BRL' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        Swal.fire({
          title: 'Yay!',
          text: 'Pagamento realizado com sucesso !',
          type: 'success'
        })
        this.router.navigate(['home']);
      })
    }
  }
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}
