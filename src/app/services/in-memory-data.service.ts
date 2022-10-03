import { Transaction } from '../models/transaction.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions: Transaction[] = [
      {id: 1, userId: 1, budgetId: 1, amount: 100.54, description: 'Payday', categoryId: 1, date: new Date()},
      {id: 2, userId: 2, budgetId: 1, amount: 1003.5, description: 'Pizza with friends', categoryId: 2, date: new Date()},
      {id: 3, userId: 3, budgetId: 1, amount: 78.54, description: 'Gas', categoryId: 3, date: new Date()},
      {id: 4, userId: 1, budgetId: 1, amount: 54.40, description: 'Argentina 1985', categoryId: 4, date: new Date()},
      {id: 5, userId: 4, budgetId: 1, amount: 34.90, description: 'CASMU', categoryId: 5, date: new Date()},
      {id: 6, userId: 5, budgetId: 1, amount: 99.99, description: 'Shopping free', categoryId: 6, date: new Date()},
      {id: 7, userId: 1, budgetId: 1, amount: 100.32, description: 'Random', categoryId: 7, date: new Date()},
      {id: 8, userId: 2, budgetId: 1, amount: 12.54, description: 'Got payed for that thing', categoryId: 1, date: new Date()},
      {id: 9, userId: 1, budgetId: 1, amount: 567.23, description: 'Groceries', categoryId: 2, date: new Date()},
      {id: 10, userId: 2, budgetId: 1, amount: 1223.45, description: 'Pedidos Ya', categoryId: 2, date: new Date()}
    ];

    return {transactions};
  }


}
