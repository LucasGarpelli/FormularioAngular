import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html'
})
export class CalcularMediaComponent {
  ac1!: number;
  ac2!: number;
  ag!: number;
  af!: number;
  mediaFinal!: number;
  resultado!: string;

  calcularMedia() {
    this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = this.mediaFinal >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
