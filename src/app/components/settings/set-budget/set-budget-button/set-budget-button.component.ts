import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-budget-button',
  templateUrl: './set-budget-button.component.html',
  styleUrls: ['./set-budget-button.component.css']
})
export class SetBudgetButtonComponent implements OnInit {

  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
