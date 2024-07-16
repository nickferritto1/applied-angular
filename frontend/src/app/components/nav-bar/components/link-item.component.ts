import { Component, input } from '@angular/core';
import { NavbarLink } from '../models';

@Component({
    selector: 'app-link-item',
    standalone: true,
    imports: [],
    template: `
        <li><a [href]="linkInput().link">{{linkInput().label}}</a></li>
    `,
    styles: ``
})
export class LinkItemComponent {
    linkInput = input.required<NavbarLink>();
}