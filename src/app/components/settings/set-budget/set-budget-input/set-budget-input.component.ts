import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-budget-form',
  templateUrl: './set-budget-form.component.html',
  styleUrls: ['./set-budget-form.component.css'],
})
export class SetBudgetFormComponent implements OnInit {

  isLoading: boolean = false;
  
  budgetForm: FormGroup = new FormGroup({});

  currentBudget: number = 175000;

  constructor(private formBuilder: FormBuilder) {
    this.budgetForm = this.formBuilder.group({
      budget: ['', Validators.required],
    });

  }

  ngOnInit(): void {    
  }
}
