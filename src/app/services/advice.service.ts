import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advice} from "../models/adviceDto.model";
import {FormGroup} from "@angular/forms";
const apiUrl = 'http://localhost:8989/advice/';
@Injectable()
export class AdviceService {
  constructor(private http :HttpClient){}

  getAdvicesByGameId(id: number):Observable<any>{
    return this.http.get<any>(apiUrl +"all/"+ id);
  }

  add(id: number, adviceDto: FormGroup):Observable<any>{
    return this.http.post<any>(apiUrl + "add/"+ id,adviceDto);
  }
}
