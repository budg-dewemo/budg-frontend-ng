import { UserService } from 'src/app/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  //TO-DO: Find a way to pass the user object from the sidenav to this view. Although this accepts an input

  @Input() user: User = {
    id: 1,
    name: '',
    lastName: '',
    username: '',
    email: '',
    avatar: '',
  };


  constructor(private transactionService: TransactionService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserPreferences();
  }

  getTransactions() {
   if(window.innerWidth > 1170) {
    this.transactionService.getTransactions().subscribe((data : any) => {
      console.log(data);
    });
   }
  }

  getUserPreferences() {
    this.userService.getUserPreferences().subscribe((data : any) => {
      this.user.name = data.user.name;
      this.user.username = data.user.username;
      this.user.email = data.user.email;
      // this.user.avatar = data.user.avatar;
      this.user.id = data.user.id;
    });
  }

}
