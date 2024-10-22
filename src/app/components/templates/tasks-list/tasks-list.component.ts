import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputSearchComponent } from '../../atoms/input-search/input-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [ButtonComponent,InputSearchComponent,CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  protected notes: Array<{ title: string; text: string }> = [
    { title: 'online',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget arcu maximus leo aliquet pulvinar. In semper magna non nunc scelerisque, sit amet consequat eros malesuada. Vestibulum id eros et augue aliquam blandit interdum vitae libero. Suspendisse non tincidunt nisl. Fusce eleifend ornare magna. Sed posuere at felis at eleifend. Vivamus eu odio eu risus finibus aliquet. Morbi at diam tempus, aliquet nibh ac, egestas mi.' },
    { title: 'ausente', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget arcu maximus leo aliquet pulvinar. In semper magna non nunc scelerisque, sit amet consequat eros malesuada. Vestibulum' },
    { title: 'ausente', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget arcu maximus leo aliquet pulvinar. In semper magna non nunc scelerisque, sit amet consequat eros malesuada. Vestibulum' },
    { title: 'ausente', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget arcu maximus leo aliquet pulvinar. In semper magna non nunc scelerisque, sit amet consequat eros malesuada. Vestibulum' },
    { title: 'no_displonible', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget arcu maximus leo aliquet pulvinar. In semper magna non nunc scelerisque, sit amet consequat eros malesuada. Vestibulum id eros et augue aliquam blandit interdum vitae libero. Suspendisse non tincidunt nisl. Fusce eleifend ornare magna. Sed posuere at felis at eleifend. Vivamus eu odio eu risus finibus aliquet. Morbi at diam tempus, aliquet nibh ac, egestas mi.' },
  ];
}
