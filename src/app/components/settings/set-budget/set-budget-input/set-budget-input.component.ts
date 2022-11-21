import { BudgetService } from './../../../../services/budget.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Budget } from 'src/app/models/budget.model';

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
    startDate: new Date(),
    endDate: new Date(),
    name: '',
  };

  constructor(private formBuilder: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.formBuilder.group({
      amount: ['', Validators.required]
    });

  }

  ngOnInit(): void {    
    this.getBudget();
  }

  getBudget() {
    this.budgetService.getCurrentBudget().subscribe((budget) => {
      console.log('budget', budget);   
      this.currentBudget.amount = budget.amount;
    });
  }

  setBudget() {
    this.isLoading = true;
    const budget: Budget = {
      name: 'Current budget',
      amount: this.budgetForm.value.amount,
      startDate: new Date(),
      endDate: moment().add(1, 'month').toDate(),
    };
    
    console.log('budget', budget);
    

    this.budgetService.setBudget(budget).subscribe((res) => {
      console.log('response', res);
      this.isLoading = false;
    });
  }
}
