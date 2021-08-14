import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const apiUrl = 'http://localhost:8989/role/';
@Injectable()
export class RoleService {

  constructor(private http:HttpClient) {
  }

  getRoles():Observable<any>{
    return this.http.get<any>(apiUrl +"all");
  }

  getRoleById(id:number):Observable<any>{
    return this.http.get<any>(apiUrl +id);

  }
}
