import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ClienteService } from '../../providers/cliente.service';
import { Cliente } from '../../model/cliente';


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

}
