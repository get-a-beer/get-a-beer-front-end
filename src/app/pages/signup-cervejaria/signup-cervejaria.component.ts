import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-cervejaria',
  templateUrl: './signup-cervejaria.component.html',
  styleUrls: ['./signup-cervejaria.component.css']
})
export class SignupCervejariaComponent implements OnInit {

  protected nomeFantasia: string;
  protected cnpj: string;
  protected email: string;
  protected phone: string;
  protected username: string;
  protected password: string;
  protected confPassword: string;

  constructor() { }

  ngOnInit() {
  }

  signupBrewery() {
    
  }

}
