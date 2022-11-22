import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {

  @Input() transaction: Transaction | undefined = {
    id: 1,
    amount: 145.65,
    categoryId: 7,
    date: new Date(),
    description: 'Pizza with friends',
    budgetId: 1,
    type: 'expense',
    filePath: ''
  };
  
  

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  getIconFromCategoryId(categoryId: number | undefined) {
    switch (categoryId) {
      case 1:
        return 'payments';
      case 2:
        return 'restaurant';
      case 3:
        return 'directions_car';
      case 4:
        return 'celebration';
      case 5:
        return 'health_and_safety';
      case 6:
        return 'shopping_bag';
      case 7:
        return 'receipt_long';
      default:
        return 'question_mark';
    }
  }

  getColorFromCategoryId(categoryId: number | undefined) {
    switch (categoryId) {
      case 1:
        return ' linear-gradient(180deg, #3ACE64 0%, #2EB454 61.98%, #146D2D 100%)';
      case 2:
        return 'linear-gradient(180deg, #7D89F0 0%, #798BF0 54.17%, #4656B3 100%)';
      case 3:
        return 'linear-gradient(180deg, #E9918C 0%, #E9918C 54.17%, #E26D67 98.44%)';
      case 4:
        return 'linear-gradient(180deg, #FFD172 0%, #FFD172 54.17%, #DFA835 100%';
      case 5:
        return 'linear-gradient(180deg, #E88740 0%, #D07C3F 61.98%, #8F4D10 100%)';
      case 6:
        return 'linear-gradient(180deg, #DF51C0 0%, #C546A9 61.98%, #792667 100%)';
      case 7:
        return 'linear-gradient(180deg, #40A5E8 0%, #3FA5E8 54.17%, #0A69A8 100%)';
      default:
        return 'linear-gradient(180deg, #51DFC6 0%, #43C0AA 61.98%, #1E7C6C 100%)';
    }
  }
}


