import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Category } from 'src/app/models/category.model';
import { ObservableLike } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';


@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component 2.html',
  styleUrls: ['./expense-input.component 2.css']
})

export class ExpenseInputComponent implements OnInit { 
  
  expenseForm: FormGroup = new FormGroup({});
  
  transactionTypes: Array<any> = [
    { value: 'expense', name: 'Expense' },
    { value: 'income', name: 'Income' },
  ];
  

  categories: Array<Category> = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private transactionService: TransactionService) {
    this.expenseForm = this.formBuilder.group({
    budgetId: [1],
    amount: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    date: ['', Validators.required],
    filePath: ['', Validators.required],
  });  
}

ngOnInit(): void {
  this.getCategories();
  console.log('categories', this.categories);
  
}



addTransaction() {
  const transaction: Transaction = {
    budgetId: this.expenseForm.value.budgetId,
    amount: this.expenseForm.value.amount,
    type: this.expenseForm.value.type,
    description: this.expenseForm.value.description,
    categoryId: this.expenseForm.value.categoryId,
    date: this.expenseForm.value.date,
    filePath: this.expenseForm.value.filePath,
  };

  this.transactionService.addTransaction(transaction).subscribe((res) => {
    console.log(res);
  });

  this.expenseForm.reset();
  
}

getCategories() {
  this.transactionService.getCategories().subscribe((res) => {
    for (let i = 0; i < res.length; i++) {
      this.categories.push({ id: res[i].id, label: res[i].name });
    }
  });
}}


