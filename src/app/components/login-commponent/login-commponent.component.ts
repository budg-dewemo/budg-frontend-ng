import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-commponent',
  templateUrl: './login-commponent.component.html',
  styleUrls: ['./login-commponent.component.css']
})
export class LoginCommponentComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onUsernameInput(value: string) {
    this.username = value;
    console.log(value);
  }

  onPasswordInput(value: string) {
    this.password = value;
    console.log(value);
  }

}
