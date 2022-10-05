import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  private url = 'api/transactions';

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url);
    
    //Obtener el id del user y llamar al otro endpoint
    // return this.getTransactionsByBudgetId(1);
  }

  // getTransactionByUserId(userId: number): Observable<Transaction[]> {
  //   return this.http.get<Transaction[]>(`${this.url}/?userId=${userId}`);
  // }

}
