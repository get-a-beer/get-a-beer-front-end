import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, SelectControlValueAccessor } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/providers/cliente.service';
import Swal from 'sweetalert2';
import { InternalAuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private authService: InternalAuthService
  ) 
  {
    this.profileForm = this.formBuilder.group({
      nome: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      telefone: '',
      usuario: '',
      senha: ''
    });
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser'))
      this.authService.me().subscribe(this.loadProfile.bind(this), this.errorHandler.bind(this));
    else
      this.router.navigate(['login']);
  }

  onSubmit(body: Cliente){
    this.clienteService.update(body, 2).subscribe(this.redirectHandler.bind(this), this.errorHandler.bind(this));
  }

  loadProfile(body: Cliente){
    this.profileForm.controls['usuario'].setValue(body.usuario)
    this.profileForm.controls['nome'].setValue(body.nome)
    this.profileForm.controls['email'].setValue(body.email)
    this.profileForm.controls['cpf'].setValue(body.cpf)
    this.profileForm.controls['dataNascimento'].setValue(body.dataNascimento)
    this.profileForm.controls['telefone'].setValue(body.telefone)
  }

  redirectHandler(){
    Swal.fire({
      title: 'Yay!',
      text: 'Perfil atualizado com sucesso !',
      type: 'success'
    })
  }

  errorHandler(){
    this.router.navigate(['login']);
    Swal.fire({
      title: 'Oops!',
      text: 'Parece que houve um problema inesperado',
      type: 'error'
    })
  }

}
