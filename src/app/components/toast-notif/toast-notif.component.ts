import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-toast-notif',
  templateUrl: './toast-notif.component.html',
  styleUrls: ['./toast-notif.component.css']
})
export class ToastNotifComponent implements OnInit {
  
  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

// Snackbar that opens with success background
openSuccessSnackBar(msg: string){
  this.snackBar.open(msg, "", {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
    panelClass: ['green-snackbar', 'login-snackbar','custom-class'],
   });
   this.snackBar.openFromTemplate
  }

  //Snackbar that opens with failure background
  openFailureSnackBar(msg: string){
  this.snackBar.open(msg, "", {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
    panelClass: ['red-snackbar','login-snackbar'],
    });
   }


}
