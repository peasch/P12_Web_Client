import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game.model";
import {GameStyleDto} from "../models/gameStyleDto.model";
import {FormGroup} from "@angular/forms";


const apiUrl = 'http://localhost:8989/game/';

@Injectable()
export class GameService {

  constructor(private http :HttpClient){}


  getAllGames():Observable<any>{
    return this.http.get<any[]>(apiUrl + 'all');
  }

  getGameById(id:number):Observable<Game>{
    return this.http.get<any>(apiUrl + id);
  }

  addGame(data:any):Observable<any>{
    return this.http.post<any>(apiUrl + 'add',data);
  }
  getGameStyleList():Observable<Set<GameStyleDto>>{
    return this.http.get<any>('http://localhost:8989/style/all');
  }
  getGameStyleById(id:number):Observable<Set<GameStyleDto>>{
    return this.http.get<any>('http://localhost:8989/style/'+id);
  }
  updateGame(gameForm:FormGroup):Observable<any>{
    return this.http.put(apiUrl+"update",gameForm);
  }
}
