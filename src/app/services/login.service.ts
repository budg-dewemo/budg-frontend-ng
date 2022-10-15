import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from "rxjs";
import { UserLogin, UserLoginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiLoginUrl = 'api/login';
  //private apiLoginUrl = 'https://reqres.in/api/login';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };


  login(user: UserLogin): Observable<UserLoginResponse> {
     
    //return this.http.post<UserLoginResponse>(this.apiLoginUrl, user, this.httpOptions)
    // return fake data
    return this.http.get<UserLoginResponse>(this.apiLoginUrl);
  }


}
