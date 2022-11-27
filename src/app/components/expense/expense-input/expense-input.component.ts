import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Category } from 'src/app/models/category.model';
import { Transaction } from 'src/app/models/transaction.model';
import { UserService } from 'src/app/services/user.service';
import { ToastNotifComponent } from '../../toast-notif/toast-notif.component';
import * as moment from 'moment';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component 2.html',
  styleUrls: ['./expense-input.component 2.css'],
})
export class ExpenseInputComponent implements OnInit {
  isLoading: boolean = false;

  currentBudgetId: number = 0;

  expenseForm: FormGroup = new FormGroup({});
  fileForm: FormGroup = new FormGroup({});

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

  @ViewChild(ToastNotifComponent) toastNotif!: ToastNotifComponent;

  ngOnInit(): void {
    this.getCategories();
    this.getCurrentBudgetId();

    this.expenseForm = this.formBuilder.group({
      budgetId: [this.currentBudgetId, Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      date: ['', Validators.required],
    });

    this.fileForm = this.formBuilder.group({
      file: [null, Validators.required],
    });
  }

  addTransaction() {
    this.isLoading = true;

    const transaction: Transaction = {
      budgetId: this.currentBudgetId,
      amount: this.expenseForm.value.amount,
      type: this.expenseForm.value.type,
      description: this.expenseForm.value.description,
      categoryId: this.expenseForm.value.categoryId,
      date: this.expenseForm.value.date.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      filePath: '',
    };
    

    this.transactionService.addTransaction(transaction).subscribe((res) => {
      if (res.status === 201) {
        const id = res.body?.id;
        const formData = new FormData();
        formData.append('file', this.fileForm.get('file')?.value);

        this.transactionService
          .putTransactionImage(formData, id)
          .subscribe((res) => {
            
            if (res.status === 200) {
              this.isLoading = false;
              this.toastNotif.openSuccessSnackBar(
                'Transaction added successfully!'
              );
            } else {
              this.isLoading = false;
              this.toastNotif.openFailureSnackBar('Something went wrong!');
            }
          });
      } else {
        this.toastNotif.openFailureSnackBar('Oops! Something went wrong!');
      }
    });

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
    this.userService.getUserPreferences().subscribe((res: any) => {
      this.currentBudgetId = res.budgetId;
    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.get('file')?.setValue(file);
    }
  }
}
