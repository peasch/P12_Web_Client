import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl = 'http://localhost:8989/borrowing/';

@Injectable()
export class BorrowingService {


  constructor(private http: HttpClient) {
  }
//---------------------ALL ----------------------------

  getAllBorrowings(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'all');
  }
  getUnreturnedBorrowings(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'unreturned');
  }
  getPendingBorrowings(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'allPending');
  }

  //--------------------By username-------------------------------------

  getAllBorrowingsByUsername(username: string | null): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + username);
  }
  getPendingBorrowingsByUsername(username: string | null): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'pending/' +username);
  }

  getReturnedBorrowingsByUsername(username: string | null): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'returned/' +username);
  }
  getUnreturnedBorrowingsByUsername(username: string | null): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'unreturned/' +username);
  }
  //--------------------Management --------------------------------------

  addBorrowingDemand(gameId: number, username: string | null):Observable<any>{

    return this.http.post<any>(apiUrl+'add/'+gameId,username);
  }

  deleteBorrowingDemand(gamedId:number):Observable<any>{
    return this.http.delete<any>(apiUrl + 'delete/'+ gamedId);
  }

  returnBorrowing(id:number):Observable<any>{
    return this.http.get<any>(apiUrl + 'return/' + id);
  }
  validBorrowing(id:number):Observable<any>{
    return this.http.get<any>(apiUrl + 'valid/' + id);
  }

}
