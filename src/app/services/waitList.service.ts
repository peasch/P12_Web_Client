import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl = 'http://localhost:8989/waitlist/';

@Injectable()
export class WaitListService {

  constructor(private http: HttpClient) {
  }

  getAllWaitList(): Observable<any> {
    return this.http.get<any[]>(apiUrl + 'all');
  }

  getWaitlistByGameId(id: number): Observable<any> {
    return this.http.get<any>(apiUrl + 'game/' + id);
  }

  getWaitlistByUserId(id: number): Observable<any> {
    return this.http.get<any>(apiUrl + 'user/' + id);
  }

  addWaitListToGame(id: number, username: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'add/' + id, username);
  }

  deleteWaitList(id: number): Observable<any> {
    return this.http.delete(apiUrl + 'delete/' + id);
  }

  skipWaitLister(id: number): Observable<any> {
    return this.http.delete(apiUrl + 'skip/' + id);
  }

  isOnWaitList(id: number, username: string|null): Observable<any> {

    return this.http.post<any>(apiUrl + 'game/user/' + id, username);
  }
}
