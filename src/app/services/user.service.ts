import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../models/balance.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userData?: any;

  private url = 'https://budg-api.nicocartalla.com/api/v1/';

  // getUserPreferences() {
  //   console.log('userData', this.userData);
    
  //   if (this.userData !== undefined) {
  //     return this.userData;
  //   } else {
  //     this.http.get<any>(this.url + 'userPreferences').subscribe(data => {
  //       this.userData = data;
  //     });
  //     }
  //     console.log(this.userData);      
  //     return this.userData;
  //   } 
  // }

  getUserPreferences(): Observable<any> {
    return this.http.get<any>(this.url + 'userPreferences');
  }

  getBalance(): Observable<Balance> {
    return this.http.get<any>(this.url + 'balance');
  }
}

