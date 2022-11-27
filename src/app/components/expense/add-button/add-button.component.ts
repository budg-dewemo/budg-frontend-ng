import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExpenseInputComponent } from '../expense-input/expense-input.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements AfterViewInit{

  @ViewChild(ExpenseInputComponent) child!: ExpenseInputComponent;

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngAfterViewInit(): void {
    this.form = this.child.expenseForm;
  }


}
