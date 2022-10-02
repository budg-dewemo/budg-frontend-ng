import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.css']
})
export class InputLoginComponent implements OnInit {
  @Output() onUsernameInput = new EventEmitter<any>();
  @Output() onPasswordInput = new EventEmitter<any>();
  username: string;
  password: string;

  constructor( ) {
    this.username = '';
    this.password = '';
   }

  ngOnInit(): void {
  }


  public showPassword: boolean = false;
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  inputUsername(value: string) {
    this.onUsernameInput.emit(this.username);
  }

  inputPassword(value: string) {
    this.onPasswordInput.emit(this.password);
  }

}
