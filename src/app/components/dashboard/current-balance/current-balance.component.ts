import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component 2.html',
  styleUrls: ['./current-balance.component 2.css']
})
export class CurrentBalanceComponent implements OnInit {

  currentBalanceData = {
    currentBalance: 16435.3,
    income: 5700,
    expenses: 2345,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
