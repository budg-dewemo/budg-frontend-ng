import { LoginService } from 'src/app/services/login.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SidenavComponent implements OnInit {

  user: User = {
    id: 1,
    name: '',
    lastName: '',
    username: '',
    email: '',
    avatar: '',
  };

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, public router: Router, private loginService: LoginService, private userService: UserService) {}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 1170px)']).subscribe((result) => {
      if (result.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
    this.getUserPreferences();
    
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  getUserPreferences() {
    this.userService.getUserPreferences().subscribe((data) => {
      this.user.name = data.user.name;
      this.user.lastName = data.user.lastName;
      this.user.username = data.user.username;
      this.user.email = data.user.email;
      this.user.avatar = data.user.avatar;
      this.user.id = data.user.id;
    });
  }

  onOutletLoaded(component: any) {
    component.user = this.user;
  }


}
