import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
const apiUrl='http://localhost:8989/style/';
@Injectable()
export class GameStyleService{
  constructor(private http :HttpClient){}

  getStyles():Observable<any>{
    return this.http.get<any[]>(apiUrl+'all');
  }
  getStyleById(id:number):Observable<any>{
    return this.http.get<any>(apiUrl+id);
  }
}
