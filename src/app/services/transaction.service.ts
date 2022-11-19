import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  private url = 'https://budg-api.nicocartalla.com/api/v1/';

  getCategories(): Observable<any> {
    return this.http.get<any>(this.url + 'categories');
  }


  getTransactions(): Observable<any> {
    return this.http.get<any>(this.url+'transactions');
  }

  addTransaction(transaction: any): Observable<Transaction> {
    return this.http.post<Transaction>(this.url, transaction);
  }


}
