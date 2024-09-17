import { Component } from '@angular/core';
import {Cliente  } from './cliente';  
@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html'
})
export class CadastroClienteComponent {
  cliente = new Cliente(0, '', '', 0);
  clientes: Cliente[] = [];

  cadastrar() {
    console.log(this.cliente);
    this.clientes.push({...this.cliente});
    this.cliente = new Cliente(0, '', '', 0); 
  }
}
