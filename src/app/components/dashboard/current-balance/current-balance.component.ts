import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component 2.html',
  styleUrls: ['./current-balance.component 2.css']
})
export class CurrentBalanceComponent implements OnInit {

  currentBalanceData: Balance = {
    currentBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
    totalBudget: 0,
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCurrentBalance();
  }

  getCurrentBalance() {
    this.userService.getBalance().subscribe((data: Balance) => {
      this.currentBalanceData = data;
    });
  }

}
