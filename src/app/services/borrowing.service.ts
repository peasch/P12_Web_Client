import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl = 'http://localhost:8989/borrowing/';

@Injectable()
export class BorrowingService {


  constructor(private http: HttpClient) {
  }

  getAllBorrowings(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'all');
  }

  getAllBorrowingsByUsername(username: string | null): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + username);
  }

  addBorrowingDemand(gameId: number, username: string | null):Observable<any>{

    return this.http.post<any>(apiUrl+'add/'+gameId,username);
  }
}
