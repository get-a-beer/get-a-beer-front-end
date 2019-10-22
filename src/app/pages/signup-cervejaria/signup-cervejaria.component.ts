import { Component, OnInit } from '@angular/core';
import { CervejariaService } from '../../providers/cervejaria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-cervejaria',
  templateUrl: './signup-cervejaria.component.html',
  styleUrls: ['./signup-cervejaria.component.css']
})
export class SignupCervejariaComponent implements OnInit {

  // Variáveis do [(ngModel)] no html
  businessName: string;
  cnpj: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  confPassword: string;

  // Outras variáveis
  // -

  constructor(private cervejariaService: CervejariaService) { }

  ngOnInit() {
  }

  signupBrewery() {

    const data = {
      nome: this.businessName,
      cnpj: this.cnpj,
      email: this.email,
      telefone: this.phone,
      usuario: this.username,
      senha: this.password
    };

    this.cervejariaService.signup(data).subscribe(
      () => {
        Swal.fire({
          title: 'Yay!',
          text: 'Usuário criado com sucesso',
          type: 'success'
        });
      },
      () => {
        Swal.fire({
          title: 'Oops!',
          text: 'Parece que houve um problema ao fazer o seu cadastro',
          type: 'error'
        });
      }
    );
  }
}
