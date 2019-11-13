import { Observable, from } from 'rxjs';
import { Boleto } from '../model/boleto';
import { HttpClient } from '@angular/common/http';


export class PagService {
  
  private pagToken: string = 'b7b2d867-1a04-4e3c-ba7e-c710091072a57f75ef144be483ad0f8c70220e7e7b5f9c0a-56ab-40d5-b465-5ad152ac7880';
  private email: string = 'matheuskleber@live.com'
  private url =`https://ws.pagseguro.uol.com.br/recurring-payment/boletos?email=${this.email}&token=${this.pagToken}`

  constructor(private http: HttpClient) { }

  boletoGenerate(body: Boleto){
    //return this.http.post<Boleto>(this.url, body).pipe(); 
    console.log('Olá')
    return null;
  }

}
