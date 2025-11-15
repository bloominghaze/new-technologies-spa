import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrl implements HttpInterceptor {

  private baseUrl = 'http://localhost:3000';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const apiReq = request.clone({
      url: `${this.baseUrl}${request.url}`
    });

    return next.handle(apiReq);
  }
}
