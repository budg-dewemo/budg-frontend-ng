import { UserService } from 'src/app/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { User } from 'src/app/models/user.model';
import { Transaction } from 'src/app/models/transaction.model';
import { async } from 'rxjs';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {
  isDataFetched: boolean = false;

  @Input() user: User = {
    id: 1,
    name: '',
    lastName: '',
    username: '',
    email: '',
    avatar: '',
  };

  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('window.innerWidth', window.innerWidth);
    this.getUserPreferences();
    this.getTransactions();
    this.isDataFetched = true;
    // Porque no se actualiza este array DIOS MIO?
    console.log('transactions on init',this.transactions);
  }

  getTransactions() {
    if (window.innerWidth >= 1920 && window.innerHeight >= 1080) {
      this.transactionService.getPaginatedTransactions(5).subscribe((data) => {
        console.log('data', data);      
        this.transactions = data;
        console.log('transactions', this.transactions);
        return data;
      });
    } else if (window.innerWidth >= 1366 && window.innerHeight >= 768) {
      this.transactionService.getPaginatedTransactions(4).subscribe((data) => {
        console.log('data', data);      
        this.transactions = data;
        console.log('transactions', this.transactions);
        return data;
      });
    } else if (window.innerWidth >= 390 && window.innerHeight >= 844) {
      this.transactionService.getPaginatedTransactions(3).subscribe((data) => {
        console.log('data', data);      
        this.transactions = data;
        console.log('transactions', this.transactions);
        return data;
      });
    } else if (window.innerWidth >= 375 && window.innerHeight >= 667) {
      this.transactionService.getPaginatedTransactions(2).subscribe((data) => {
        console.log('data', data);      
        this.transactions = data;
        console.log('transactions', this.transactions);
        return data;
      });
    } else if (window.innerWidth >= 1536 && window.innerHeight >= 864) {
      console.log('hola');
      
    }
  }

  getUserPreferences() {
    this.userService.getUserPreferences().subscribe((data: any) => {
      this.user.name = data.user.name;
      this.user.username = data.user.username;
      this.user.email = data.user.email;
      // this.user.avatar = data.user.avatar;
      this.user.id = data.user.id;
    });
  }
}
