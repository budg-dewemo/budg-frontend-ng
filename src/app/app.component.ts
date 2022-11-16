import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budg-frontend-ng';

  constructor(public router: Router) {}

  isLoginRoute() {
    return this.router.url === '/';
  }
}
