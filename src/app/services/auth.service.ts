import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, tap } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = 'https://budg-api.nicocartalla.com/api/v1/authenticate';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  login(username: string, password: string) {
    return this.http.post<any>(this.url, { username, password }).pipe(
      tap((res) => this.setSession(res)),  
      shareReplay()
    );    
  }

  private setSession(authResult: any) {  
    const expiresAt = new Date(authResult.expiration * 1000);

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expiration') as string;
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }
}
