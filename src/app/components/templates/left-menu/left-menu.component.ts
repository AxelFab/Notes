import { Component } from '@angular/core';
import { UserMenuComponent } from '../../atoms/user-menu/user-menu.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ListAccordionComponent } from '../../atoms/list-accordion/list-accordion.component';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [UserMenuComponent, ButtonComponent, ListAccordionComponent],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {


  closeMenu(e:Event){
    const element  = document.querySelector(".left-menu") as HTMLElement;
    element.classList.toggle('open-menu');
  }

}
