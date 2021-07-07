import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game.model";

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
}
