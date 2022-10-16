import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent implements OnInit {
  selected = "";
  constructor() { }

  options: string[] = ['Op1', 'Op2', 'Op3'];
  startDate = new Date();
  // get current date
  
  ngOnInit(): void {
  }

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
}
