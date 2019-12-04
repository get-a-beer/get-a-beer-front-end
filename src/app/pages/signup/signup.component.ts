import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ClienteService } from '../../providers/cliente.service';
import { Cliente } from '../../model/cliente';

import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupModel: Cliente;
  signupForm;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    public OAuth: AuthService
  ){
    this.signupForm = this.formBuilder.group({
      nome: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      telefone: '',
      usuario: '',
      senha: ''
    })
  }

  ngOnInit() {
  }
  
  onSubmit(body: Cliente){
    this.clienteService.create(body).subscribe(this.redirectHandler.bind(this), this.errorHandler.bind(this));
  }

  redirectHandler(){
    Swal.fire({
      title: 'Yay!',
      text: 'Cadastro concluído com sucesso !',
      type: 'success'
    })
    this.router.navigate(['login']);
  }

  errorHandler(){
    Swal.fire({
      title: 'Oops!',
      text: 'Parece que houve um problema ao fazer o seu cadastro',
      type: 'error'
    })
  }

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;  
    if (socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
       const client: Cliente = {
         nome: socialusers.name,
         email: socialusers.email,
         senha: socialusers.id,
         usuario: socialusers.email,
         cpf: 'null',
         telefone: 'null',
         dataNascimento: new Date()
       }
       this.clienteService.create(client).subscribe(this.redirectHandler.bind(this), this.errorHandler.bind(this));
    });  
  }  
}
