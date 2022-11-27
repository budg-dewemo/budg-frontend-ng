import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  transactionId: any;

  constructor(private transactionService: TransactionService, @Inject(MAT_DIALOG_DATA) public data: {id: number}, private router: Router) { }

  ngOnInit(): void {
    this.transactionId = this.data.id;
  }

  deleteTransaction() {
    this.transactionService.deleteTransaction(this.transactionId).subscribe(res => {
      if (res.status === 200) {
        this.router.navigate(['/transactions']);
      }
    });
  }

}
