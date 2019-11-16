import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Boleto } from '../../model/boleto';
import { PagService } from '../../providers/pag.service'

declare let paypal: any;
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements AfterViewChecked {

  constructor(
    private router: Router,
    private pagService: PagService
  ) { }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  tabHidded: string = 'none';

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

  changeTab(tab: string){
    this.tabHidded = tab;
  }

  /*
  {
  "firstDueDate": "2019-11-18",
  "numberOfPayments": "1",
  "periodicity": "monthly",
  "amount": "10.38",
  "description": "Compra de cerveja",
  "customer": {
    "name": "Matheus Barbosa",
    "email": "matheuskleber09@yahoo.com.br",
    "phone": {
    	"areaCode": "27",
    	"number": "998773525"
    },
    "document": {
      "type": "CPF",
      "value": "16306489738"
    }
  }
}
  */
  gerarBoleto(){
    let body: Boleto = {
      firstDueDate: `${new Date()}`,
      numberOfPayments: `1`,
      periodicity: `monthly`,
      amount: `${this.totalValue}`,
      description: `Compra de cerveja`,
      customer: {
        name: `Matheus Barbosa`,
        email: `matheuskleber09@yahoo.com.br`,
        document: {
          type: `CPF`,
          value: `16306489738`
        },
        phone: {
          areaCode: `27`,
          number: `998773525`
        }
      }
    }
    this.pagService.boletoGenerate(body).subscribe(() => console.log('funcionou'), () => console.log('Nao funcionou'))
    //console.log(body)
  }

}
