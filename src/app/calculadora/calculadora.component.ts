import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent {
  num1!: number;
  num2!: number;
  operacao!: string;
  resultado!: number;

  calcular() {
    switch(this.operacao) {
      case 'soma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'subtracao':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacao':
        this.resultado = this.num1 * this.num2;
        break;
      case 'divisao':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }
}
