import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-budget-button',
  templateUrl: './set-budget-button.component.html',
  styleUrls: ['./set-budget-button.component.css']
})
export class SetBudgetButtonComponent implements OnInit {

  isLoading: boolean = false;

  @Input() budget?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
