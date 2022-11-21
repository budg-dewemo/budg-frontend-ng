import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'https://budg-api.nicocartalla.com/api/v1/reports';

  constructor(private http: HttpClient) {}

  // getReports() {
  //   return this.http.get(this.url);
  // }


}
