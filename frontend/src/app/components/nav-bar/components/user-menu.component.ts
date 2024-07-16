import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  template: ` <div class="btn">Bob Smith</div> `, //explain the async
  styles: ``,
})
export class UserMenuComponent {
  client = inject(HttpClient);

  user = this.client.get('/api/user').subscribe((r) => console.log(r));
}
