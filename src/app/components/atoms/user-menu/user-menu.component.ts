import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  @Input() userName: string = '';
  protected status: Array<{ type: string; desc: string }> = [
    { type: 'online', desc: 'Online' },
    { type: 'ausente', desc: 'Ausente' },
    { type: 'no_displonible', desc: 'No disponible' },
  ];
}
