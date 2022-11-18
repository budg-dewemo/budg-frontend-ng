import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-settings-banner',
  templateUrl: './user-settings-banner.component.html',
  styleUrls: ['./user-settings-banner.component.css']
})
export class UserSettingsBannerComponent implements OnInit {

  @Input() user: User = {
    id: 1,
    name: 'John',
    lastName: 'Smith',
    username: 'johnsmith',
    email: 'johnsmith@gmail.com',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
