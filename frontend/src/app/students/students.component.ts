import { Component } from '@angular/core';
import { SignalsComponent } from "./signals/signals.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [SignalsComponent, RouterOutlet],
  template: `
    <div>
      <h2> Student Stuff</h2>
      <ul>
        <li><a routerLink="signals">Signals</a></li>
      </ul>
    </div>
      <div>
        <router-outlet/>
      </div>
  `,
  styles: ``
})
export class StudentsComponent {

}
