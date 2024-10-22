import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicador-circle',
  standalone: true,
  imports: [],
  templateUrl: './indicador-circle.component.html',
  styleUrl: './indicador-circle.component.scss',
})
export class IndicadorCircleComponent {
  @Input() number: number = 0;
  @Input() bgColor: string = '';
}
