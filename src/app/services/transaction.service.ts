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

  getPaginatedTransactions(quantity: number): Observable<any> {
    return this.http.get<any>(this.url+'transactions?quantity='+ quantity);
  }

  addTransaction(transaction: Transaction) {
    return this.http.post<Transaction>(this.url+'transactions', transaction, {observe: 'response'});
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.url+'transactions/'+id);
  }

  deleteTransaction(id: number) {
    return this.http.delete(this.url+'transactions/'+id, {observe: 'response'});
  }

  putTransactionImage(formdata: FormData, id: number | undefined) {
    return this.http.put<FormData>(this.url+'transactions/putfile?id='+id, formdata, {observe: 'response'});
  }




}
