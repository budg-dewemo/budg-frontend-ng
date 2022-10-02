import { Component, OnInit, Input, ViewChild, Directive } from '@angular/core';
import { UserLogin, UserLoginResponse } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { ToastNotifComponent } from '../toast-notif/toast-notif.component';


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

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.isLoading = true;
    let token: UserLoginResponse;
    let errorResponse: any;
    const login: UserLogin = { username: this.username, password: this.password };
    this.loginService.login(login).subscribe( data => {
      token = data;
      console.log(token);
      this.isLoading = false;
      this.notif.openSuccessSnackBar("Login Successful");

    }, error => {
      errorResponse = error;
      console.log(errorResponse);
      this.isLoading = false;
      this.notif.openFailureSnackBar(errorResponse.error.error);
    }
    );

  }
  

}
