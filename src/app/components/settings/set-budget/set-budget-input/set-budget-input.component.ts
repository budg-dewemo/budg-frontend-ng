import { Router } from '@angular/router';
import { BudgetService } from './../../../../services/budget.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Budget } from 'src/app/models/budget.model';
import { ToastNotifComponent } from 'src/app/components/toast-notif/toast-notif.component';


@Component({
  selector: 'app-set-budget-form',
  templateUrl: './set-budget-form.component.html',
  styleUrls: ['./set-budget-form.component.css'],
})
export class SetBudgetFormComponent implements OnInit {

  isLoading: boolean = false;
  
  budgetForm: FormGroup = new FormGroup({});

  currentBudget : Budget = {
    amount: 0,
    startDate: '',
    endDate:  '',
    name: '',
  };

  @ViewChild(ToastNotifComponent) toastNotif!: ToastNotifComponent;

  constructor(private formBuilder: FormBuilder, private budgetService: BudgetService, private router: Router) {
    this.budgetForm = this.formBuilder.group({
      amount: ['', Validators.required]
    });

  }

  ngOnInit(): void {    
    this.getBudget();
  }

  getBudget() {
    this.budgetService.getCurrentBudget().subscribe((budget) => {
      this.currentBudget.amount = budget.amount;
    });
  }

  setBudget() {
    this.isLoading = true;
    
    const budget: Budget = {
      name: 'Current budget',
      amount: this.budgetForm.value.amount,
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().add(1, 'month').format('YYYY-MM-DD'),
    };
    
    this.budgetService.setBudget(budget).subscribe((res) => {
      if (res.status === 201) {
        this.isLoading = false;
        // this.toastNotif.openSuccessSnackBar('New budget set successfully!');
        this.router.navigate(['/dashboard']);
      } else {
        this.isLoading = false;
        this.toastNotif.openFailureSnackBar('Failed to set new budget');
      }      
    });
  }
}
