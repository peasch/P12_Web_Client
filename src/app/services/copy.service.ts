import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Copy} from "../models/copy.model";

const apiUrl = 'http://localhost:8989/copy/';

@Injectable()
export class CopyService {

  constructor(private http: HttpClient) {
  }

  addCopy(data: any,id:number): Observable<Copy> {
     return this.http.post<any>(apiUrl + 'add/' + id, data);
  }

}
