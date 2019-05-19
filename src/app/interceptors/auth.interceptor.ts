import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { CookieService } from 'ngx-cookie';

import { Observable } from 'rxjs';

import { jwtCookieKey } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private cookie: CookieService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const token = this.cookie.get(jwtCookieKey);

    if (token) {
      request = request.clone({
        setHeaders: {
          [jwtCookieKey]: token
        }
      });
    }

    return next.handle(request);
  }
}
