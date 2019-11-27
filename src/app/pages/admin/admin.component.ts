import { Component, OnInit } from '@angular/core';
import { CervejariaService } from 'src/app/providers/cervejaria.service';
import { Cervejaria } from 'src/app/model/cervejaria';
import { ClienteService } from 'src/app/providers/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  views = [true, false];
  sellers: Cervejaria[];
  clients: Cliente[];

  constructor(
    private cervejariaService: CervejariaService,
    private clienteService: ClienteService
  ) {
    this.cervejariaService.findAll().subscribe((res) => {
      this.sellers = res;
    });

    this.clienteService.findAll().subscribe((res) => {
      this.clients = res;
    });
  }

  ngOnInit() {}

  showView(id: number) {
    this.views.map((v, i) => this.views[i] = false);
    this.views[id] = true;
  }
}
