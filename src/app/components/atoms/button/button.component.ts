import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() id: string = '';
  @Input() width: string = '100';
  @Input() icon: string = 'home';
  @Input() text: string = 'Button';
  @Input() background: string = '';
  @Input() textColor: string = '';
}
