import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = 'https://budg-api.nicocartalla.com/api/v1/';

  getUserPreferences(): Observable<any> {
    return this.http.get<any>(this.url + 'userPreferences');
  }
}
