import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent implements OnInit {

//@Output() private formEvent = new EventEmitter<any>();

expenseForm: FormGroup = new FormGroup({});

constructor(private formBuilder: FormBuilder, private router: Router ) {
  this.expenseForm = this.formBuilder.group({
    amount: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    date: ['', Validators.required],
    file: ['', Validators.required],
  });  
}

transactionTypes: Array<any> = [
  { id: 1, name: 'Expense' },
  { id: 2, name: 'Income' },
];

categories: Array<any> = [
  { value: 1, label: 'Food' },
  { value: 2, label: 'Transportation' },
  { value: 3, label: 'Entertainment' },
  { value: 4, label: 'Health' },
  { value: 5, label: 'Clothing' },
  { value: 6, label: 'Miscellaneous' },
];

ngOnInit(): void {
  
}

addTransaction() {
  const transaction = {
    amount: this.expenseForm.value.amount,
    type: this.expenseForm.value.type,
    description: this.expenseForm.value.description,
    categoryId: this.expenseForm.value.categoryId,
    date: this.expenseForm.value.date,
    file: this.expenseForm.value.file,
  };

  console.log(transaction);
  
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


