import { Component, input } from '@angular/core';
import { NavbarLinks } from '../models';
import { RouterLink } from '@angular/router';
import { LinkItemChildrenComponent } from './link-item-children.component';
import { LinkItemComponent } from './link-item.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, LinkItemChildrenComponent, LinkItemComponent],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for(link of listOfLinks(); track $index) { @if(link.children) {
      <app-link-item-children [link]="link" />
      } @else {
      <app-link-item [linkInput]="link" />
      } }
    </ul>
  `,
  styles: ``,
})
export class MainMenuComponent {
  listOfLinks = input.required<NavbarLinks>();
}
