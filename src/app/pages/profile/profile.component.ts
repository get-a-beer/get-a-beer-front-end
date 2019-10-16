import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, SelectControlValueAccessor } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/providers/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
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
    //this.profileForm.controls['nome'].setValue(this.cliente.nome)
  }

  ngOnInit() {
    this.clienteService.findOne(2).subscribe(this.loadProfile.bind(this), this.errorHandler.bind(this));
  }

  onSubmit(body: Cliente){
    this.clienteService.create(body).subscribe(this.redirectHandler.bind(this), this.errorHandler.bind(this));
  }

  loadProfile(body: Cliente){
    this.profileForm.controls['nome'].setValue(body.nome)
    this.profileForm.controls['email'].setValue(body.email)
    this.profileForm.controls['cpf'].setValue(body.cpf)
    this.profileForm.controls['dataNascimento'].setValue(body.dataNascimento)
    this.profileForm.controls['telefone'].setValue(body.telefone)
    this.profileForm.controls['usuario'].setValue(body.usuario)
  }

  redirectHandler(){
    Swal.fire({
      title: 'Yay!',
      text: 'Perfil atualizado com sucesso !',
      type: 'success'
    })
  }

  errorHandler(){
    Swal.fire({
      title: 'Oops!',
      text: 'Parece que houve um problema inesperado',
      type: 'error'
    })
  }

}
