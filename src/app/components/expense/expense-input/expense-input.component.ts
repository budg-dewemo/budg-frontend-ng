import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component 2.html',
  styleUrls: ['./expense-input.component 2.css']
})
export class ExpenseInputComponent implements OnInit {
  
  
  expenseForm: FormGroup = new FormGroup({});
  
  transactionTypes: Array<any> = [
    { id: 1, name: 'Expense' },
    { id: 2, name: 'Income' },
  ];
  
  //TO-DO: check how stop using any type
  categories: Array<any> = [

  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private transactionService: TransactionService) {
    this.expenseForm = this.formBuilder.group({
    amount: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    date: ['', Validators.required],
    file: ['', Validators.required],
  });  
}

ngOnInit(): void {
  this.getCategories();
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

getCategories() {
  this.transactionService.getCategories().subscribe((res) => {
    for (let i = 0; i < res.length; i++) {
      this.categories.push({ id: res[i].id, label: res[i].name });
    }
  });
}

}


