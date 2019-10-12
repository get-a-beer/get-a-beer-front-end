import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SignupService } from '../../providers/signup.service';
import { Signup } from '../../model/signup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupModel: Signup;
  signupForm;

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder,
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
  
  async onSubmit(body: Signup){
    
    await this.signupService.signup(body).subscribe((data: Signup) => this.signupModel = {...data});
    console.log(this.signupModel);
  }

}
