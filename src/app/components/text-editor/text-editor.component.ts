import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [QuillModule, FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss',
})
export class TextEditorComponent {
  title = 'Notes';
  editorContent = '<p>Escribe algo aquí...</p>';
  editorModules: any;
  isReadOnly: boolean = false;

  constructor() {
    this.initializeEditorModules();
  }

  initializeEditorModules() {
    this.editorModules = {
      toolbar: [
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

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
    this.initializeEditorModules();
  }

  onContentChanged({ html }: any) {
    // Maneja los cambios en el contenido
    console.log('Contenido cambiado:', html);
  }
}
