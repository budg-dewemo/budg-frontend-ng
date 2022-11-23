import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Category } from 'src/app/models/category.model';
import { ObservableLike } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component 2.html',
  styleUrls: ['./expense-input.component 2.css'],
})
export class ExpenseInputComponent implements OnInit {
  isLoading: boolean = false;

  currentBudgetId: number = 0;

  expenseForm: FormGroup = new FormGroup({});

  transactionTypes: Array<any> = [
    { value: 'expense', name: 'Expense' },
    { value: 'income', name: 'Income' },
  ];

  categories: Array<Category> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getCurrentBudgetId();

    console.log('current budget id', this.currentBudgetId);

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

  addTransaction() {
    this.isLoading = true;

    const transaction: Transaction = {
      budgetId: this.expenseForm.value.budgetId,
      amount: this.expenseForm.value.amount,
      type: this.expenseForm.value.type,
      description: this.expenseForm.value.description,
      categoryId: this.expenseForm.value.categoryId,
      date: this.expenseForm.value.date,
      filePath: this.expenseForm.value.filePath,
    };

    console.log('transaction', transaction);

    this.transactionService.addTransaction(transaction).subscribe((res) => {
      console.log(res);
    });

    this.isLoading = false;
    this.expenseForm.reset();
  }

  getCategories() {
    this.transactionService.getCategories().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        this.categories.push({ id: res[i].id, label: res[i].name });
      }
    });
  }

  getCurrentBudgetId() {
    this.userService.getUserPreferences().subscribe((res) => {
      console.log('res from get current budget id', res.budgetId);
      this.currentBudgetId = res.budgetId;
    });
  }
}
