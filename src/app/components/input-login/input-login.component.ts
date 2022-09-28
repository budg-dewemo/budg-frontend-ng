import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.css']
})
export class InputLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showPassword: boolean = false;
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
