import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  @Input() user: User = {
    id: 1,
    name: '',
    lastName: '',
    username: '',
    email: '',
    avatar: ''
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
