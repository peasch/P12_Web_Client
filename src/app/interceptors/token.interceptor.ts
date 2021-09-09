import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private cookieService:CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token,

        }
      });
    }
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')

    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          alert(error.error);
          this.router.navigate(['']);
        }
        if (error.status === 400) {
          alert(error.error);
        } if (error.status === 403) {
          alert(error.error);
        }
        return throwError(error);
      }));
  }

}
