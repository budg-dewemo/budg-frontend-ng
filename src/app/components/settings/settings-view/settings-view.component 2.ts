import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  @Input() user: User = {
    id: 1,
    name: '',
    lastName: '',
    username: '',
    email: '',
    avatar: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
