import { Transaction } from '../models/transaction.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {


    

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

    return { monthlySpendings, weeklySpendingsByCategory};
  }



}
