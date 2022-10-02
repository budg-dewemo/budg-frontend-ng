import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { UserLogin, UserLoginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(user: UserLogin): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>('https://reqres.in/api/login', user);
  }
}
