import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njg0NTczNTMsImlkIjoyLCJ1c2VybmFtZSI6ImpvaG5zbWl0aCJ9.ZnBH4MfAjkooOuD72Uw4S83ZQL85e2lhlOPrVbrT8gs';

    if (token && !request.url.includes('authenticate')) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
        
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
