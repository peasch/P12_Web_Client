import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
const apiUrl = 'http://localhost:8989/advice/';
@Injectable()
export class AdviceService {
  constructor(private http :HttpClient){}

  getAdvicesByGameId(id: number):Observable<any>{
    return this.http.get<any>(apiUrl +"all/"+ id);
  }
  getAdviceById(id:number):Observable<any>{
    return this.http.get<any>(apiUrl + "advice/"+id);
  }

  getAdviceByUsername(username: string | null):Observable<any>{
    return this.http.get<any>(apiUrl+"username/"+username);
  }

  add(id: number, adviceDto: FormGroup):Observable<any>{
    return this.http.post<any>(apiUrl + "add/"+ id,adviceDto);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(apiUrl+"delete/"+ id);
  }
  update(id:number,advice:FormGroup):Observable<any>{
    return this.http.put<any>(apiUrl + 'update/'+id,advice);
  }

}
