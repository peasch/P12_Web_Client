import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Injectable} from "@angular/core";
const apiUrl = 'http://localhost:8989/auth/';

@Injectable()
export class AuthService{
  isLoggedIn = false;
  redirectUrl!: string;

  constructor(private http:HttpClient) {
  }

  login(data: any): Observable<any> {

    // @ts-ignore
    return this.http.post<any>(apiUrl + 'login', data,{responseType: 'text'})
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );

  }

  logout() {
     this.isLoggedIn = false;

  }

  register(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
