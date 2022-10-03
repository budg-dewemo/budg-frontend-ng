import { TransactionService } from 'src/app/services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] | undefined = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
    
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

}
