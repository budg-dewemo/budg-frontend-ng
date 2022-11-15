import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe((data) => {
      console.log(data);
    });
  }
}
