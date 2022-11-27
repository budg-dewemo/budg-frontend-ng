import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css'],
})
export class SettingsViewComponent implements OnInit {

  fetched: boolean = false;

  @Input() user: User = {
    id: 1,
    name: '',
    lastName: '',
    username: '',
    email: '',
    avatar: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
    this.userService.getUserPreferences().subscribe((data : any) => {
      this.user.name = data.user.name;
      this.user.lastName = data.user.lastName;
      this.user.username = data.user.username;
      this.user.email = data.user.email;
      this.user.avatar = data.user.avatar;
      this.user.id = data.user.id;
      this.fetched = true;
    });
  }
}
