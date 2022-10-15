import { TransactionService } from 'src/app/services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction.model';

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
    // this.sortTransactionsByAmountAsc();
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(data => {
      // data.sort((a, b) => {
      //   return b.date.getDate() - a.date.getDate();
      // });
      this.transactions = data;
    });
  }

  // No se porque no me está andando
  sortTransactionsByDateAsc() {
    this.transactions?.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });
  }

  sortTransactionsByNameAsc() {
    this.transactions?.sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }

  

}
