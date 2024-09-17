import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html'
})
export class ApoliceSeguroComponent {
  nome!: string;
  sexo!: string;
  idade!: number;
  valorAutomovel!: number;
  valorApolice!: number;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      this.valorApolice = this.idade <= 25 ? this.valorAutomovel * 0.15 : this.valorAutomovel * 0.10;
    } else {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}
