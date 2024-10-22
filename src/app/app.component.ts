import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { SortableComponentimplements } from './components/sortable/sortable.component';
import { ListAccordionComponent } from './components/atoms/list-accordion/list-accordion.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/atoms/button/button.component';
import { UserMenuComponent } from './components/atoms/user-menu/user-menu.component';
import { InputSearchComponent } from './components/atoms/input-search/input-search.component';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/templates/tasks-list/tasks-list.component';
import { LeftMenuComponent } from './components/templates/left-menu/left-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuillModule,
    FormsModule,
    TextEditorComponent,
    SortableComponentimplements,
    ListAccordionComponent,
    MatIconModule,
    ButtonComponent,
    UserMenuComponent,
    InputSearchComponent,
    CommonModule,
    TasksListComponent,
    LeftMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Asegúrate de usar "styleUrls" en lugar de "styleUrl"
})
export class AppComponent {


}
