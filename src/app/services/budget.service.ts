import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  private url = 'https://budg-api.nicocartalla.com/api/v1/';

  getCurrentBudget(): Observable<any> {
    return this.http.get<any>(this.url+'budget');
  }

  setBudget(budget: Budget) {
    return this.http.post<Budget>(this.url+'budget', budget);
  }
}
