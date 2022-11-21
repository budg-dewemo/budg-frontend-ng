import { AuthService } from './../../../services/auth.service';
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

  constructor(
    private observer: BreakpointObserver,
    public router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

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
    // if (localStorage.getItem('name') == undefined) {
    //   this.getUserPreferences();
    // }

    this.getUserPreferences();
  }

  logout() {
    this.authService.logout();
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

    const name = localStorage.setItem('name', this.user.name);
    const lastName = localStorage.setItem('lastName', this.user.lastName);
    const username = localStorage.setItem('username', this.user.username);
    const email = localStorage.setItem('email', this.user.email);
    const avatar = localStorage.setItem('avatar', this.user.avatar);
    const id = localStorage.setItem('id', this.user.id.toString());
  }

  onOutletLoaded(component: any) {
    component.user = this.user;
  }
}
