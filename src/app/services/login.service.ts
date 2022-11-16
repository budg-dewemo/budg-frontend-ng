import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, tap } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
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
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    console.log(this.getExpiration().toDate());
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at') as string;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
