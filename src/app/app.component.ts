import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'budg-frontend-ng';

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  isLoginRoute() {
    return this.router.url === '/';
  }

  isSignUpRoute() {
    return this.router.url === '/sign-up';
  }

  

  logUserOut() {  
    if (this.authService.isLoggedOut()) {
      this.router.navigate(['/']);
    }     
    }
  
}
