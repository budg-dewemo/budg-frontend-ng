import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-set-budget-view',
  templateUrl: './set-budget-view.component.html',
  styleUrls: ['./set-budget-view.component.css']
})
export class SetBudgetViewComponent implements OnInit {

  @ViewChild('setBudgetForm') setBudgetForm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
