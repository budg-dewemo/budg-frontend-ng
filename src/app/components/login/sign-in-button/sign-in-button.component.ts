import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Input, ViewChild, Directive } from '@angular/core';
import { ToastNotifComponent } from '../../toast-notif/toast-notif.component';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.css'],
})
export class SignInButtonComponent implements OnInit {
  isLoading = false;

  @Input() username: string = '';
  @Input() password: string = '';
  @ViewChild(ToastNotifComponent) notif!: ToastNotifComponent;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  signIn() {
    this.isLoading = true;
    this.authService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      });
  }
}
