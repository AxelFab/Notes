import { Component,OnInit } from '@angular/core';
import Sortable from 'sortablejs';


@Component({
  selector: 'app-sortable',
  standalone: true,
  imports: [],
  templateUrl: './sortable.component.html',
  styleUrl: './sortable.component.scss'
})
export class SortableComponentimplements implements OnInit {
  editorModules: any;
  isReadOnly: boolean = false;

  ngOnInit(): void {
    this.initializeSortable();
  }



  initializeSortable(): void {

    const nested = document.getElementById('nested-sortables') as HTMLElement;

    if (nested) {
      // Si el contenedor existe, inicializa Sortable
      new Sortable(nested, {
        animation: 150, // Tiempo de la animación en milisegundos
        onEnd: function (evt) {
          console.log('Tabla arrastrada: ' + evt.item.innerText);
        },
      });
    }

    // Inicializar Sortable para los elementos dentro de las celdas
    const nestedSortables = document.querySelectorAll('.nested-list');

    nestedSortables.forEach(sortableList => {
      new Sortable(sortableList as HTMLElement, {
        group: 'nested',
        animation: 150,
        ghostClass: 'ghost',
        fallbackOnBody: true,
        swapThreshold: 0.65,
        invertSwap: true,
        onEnd: (event) => {
          console.log('Elemento movido: ', event.item.innerText);
        }
      });
    });
  }


  initializeEditorModules() {
    this.editorModules = {
      toolbar:[
        ['bold', 'italic', 'underline', 'strike'],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ color: [] }, { background: [] }],
        ['link', 'image', 'video'],
        ['blockquote', 'code-block'],
        ['clean'],
      ],
    };
  }

}
