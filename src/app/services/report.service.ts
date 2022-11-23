import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'https://budg-api.nicocartalla.com/api/v1/report/';

  constructor(private http: HttpClient) {}

  getMonthlyReport(): Observable<Report> {
    return this.http.get<any>(this.url + 'monthly');
  }

  getCategoryReport(): Observable<Report> {
    return this.http.get<any>(this.url + 'category');
  }


}
