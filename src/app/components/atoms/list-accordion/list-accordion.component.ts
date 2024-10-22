import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IndicadorCircleComponent } from '../indicador-circle/indicador-circle.component';

@Component({
  selector: 'app-list-accordion',
  standalone: true,
  imports: [MatIconModule, IndicadorCircleComponent, CommonModule],
  templateUrl: './list-accordion.component.html',
  styleUrl: './list-accordion.component.scss',
})
export class ListAccordionComponent {
  @Input() item: String = 'Item...';
  @Input() id: string = '';
  @Input() expand: boolean = true;
  @Input() grupos: any = [
    { grupo: 'Tareas', lista: [{ item: 'Nombre 1' }, { item: 'Nombre 2' }] },
    { grupo: 'Tareas', lista: [{ item: 'Nombre 1' }, { item: 'Nombre 2' }] },
    { grupo: 'Tareas', lista: [{ item: 'Nombre 1' }, { item: 'Nombre 2' },{ item: 'Nombre 3' },{ item: 'Nombre 4' }] },
  ];

  activeIndex: number | null = null;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index; // Alternar entre el acordeón clicado y cerrar todos
  }


  showTask(e:Event){
      e.preventDefault();
      e.stopPropagation();
      const element = e.target as HTMLElement;
      alert(element.innerText);
  }
}
