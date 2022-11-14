import { Transaction } from '../models/transaction.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { UserLogin, UserLoginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions: Transaction[] = [
      {id: 1, userId: 1, budgetId: 1, amount: 100.54, description: 'Payday', categoryId: 1, date: new Date(2018, 11, 24)},
      {id: 2, userId: 2, budgetId: 1, amount: 1003.5, description: 'Pizza with friends', categoryId: 2, date: new Date(2017, 11, 24)},
      {id: 3, userId: 3, budgetId: 1, amount: 78.54, description: 'Gas', categoryId: 3, date: new Date()},
      {id: 4, userId: 1, budgetId: 1, amount: 54.40, description: 'Argentina 1985', categoryId: 4, date: new Date()},
      {id: 5, userId: 4, budgetId: 1, amount: 34.90, description: 'CASMU', categoryId: 5, date: new Date()},
      {id: 6, userId: 5, budgetId: 1, amount: 99.99, description: 'Shopping free', categoryId: 6, date: new Date()},
      {id: 7, userId: 1, budgetId: 1, amount: 100.32, description: 'Random', categoryId: 7, date: new Date()},
      {id: 8, userId: 2, budgetId: 1, amount: 12.54, description: 'Got payed for that thing', categoryId: 1, date: new Date()},
      {id: 9, userId: 1, budgetId: 1, amount: 567.23, description: 'Groceries', categoryId: 2, date: new Date()},
      {id: 10, userId: 2, budgetId: 1, amount: 1223.45, description: 'Pedidos Ya', categoryId: 2, date: new Date()}
    ];

    const login: UserLoginResponse = {token: 'qweqw1231231qweqw'};

    const monthlySpendings: any[] = [
      {
        January: 1000,
        February: 2000,
        March: 3000,
        April: 4000,
        May: 5000,
        June: 6000,
        July: 7000,
        August: 8000,
        September: 9000,
        October: 10000,
        November: 11000,
        December: 12000
      }
    ];

    const weeklySpendingsByCategory: any[] = [
      {
        Food: 1000,
        Groceries: 2000,
        Gas: 3000,
        Entertainment: 4000,
        Bills: 5000,
        Holidays: 6000,
        Clothing: 7000,
        Miscellaneous: 8000,
        CustomExpenses: 9000
      }
    ];

    return {transactions, login, monthlySpendings, weeklySpendingsByCategory};
  }



}
