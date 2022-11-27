import { TransactionService } from 'src/app/services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-individual-transaction-view',
  templateUrl: './individual-transaction-view.component.html',
  styleUrls: ['./individual-transaction-view.component.css']
})
export class IndividualTransactionViewComponent implements OnInit {

  hasImage: boolean = false;

  private routeSub?: Subscription;

  transactionId: number = 0;

  transaction: Transaction = {
    id: 0,
    amount: 0,
    type: '',
    description: '',
    categoryId: 0,
    date: new Date(),
    filePath: '',
    budgetId: 0
  }

  categoryName(categoryId: number | undefined) {
    switch (categoryId) {
      case 1:
        return 'Income';
      case 2:
        return 'Food';
      case 3:
        return 'Transportation';
      case 4:
        return 'Entertainment';
      case 5:
        return 'Utilities';
      case 6:
        return 'Healthcare';
      case 7:
        return 'Clothing';
      case 8:
        return 'Education';
      case 9:
        return 'Savings';
      case 10:
        return 'Personal Spendings';
      case 11:
        return 'Miscellaneous';
      default:
        return 'Other';
    }}
    

  constructor(private route: ActivatedRoute, private transactionService: TransactionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.transactionId = params['id'];
    });

    this.getTransactionDetails();
  }

  getTransactionDetails() {
    this.transactionService.getTransactionById(this.transactionId).subscribe(data => {
      this.transaction.id = data.id;
      this.transaction.amount = data.amount;
      this.transaction.type = data.type;
      this.transaction.description = data.description;
      this.transaction.categoryId = data.categoryId;
      this.transaction.date = data.date;
      this.transaction.filePath = data.filePath;
      this.transaction.budgetId = data.budgetId;
    });
    

    if (this.transaction.filePath != ' ') {
      this.hasImage = true;
    }

  }

  openConfirmationModal() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {id: this.transactionId}
    });
  }

  
  

}
