import { TransactionService } from 'src/app/services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component 2.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

 @Input() transactions: Transaction[] = [];
 @Input() page_size: number = 6;
 @Input() page_number: number = 1;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }


  

}
