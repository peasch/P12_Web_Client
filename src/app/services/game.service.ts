import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game.model";
import {GameStyleDto} from "../models/gameStyleDto.model";
import {FormGroup} from "@angular/forms";


const apiUrl = 'http://localhost:8989/game/';

@Injectable()
export class GameService {

  constructor(private http: HttpClient) {
  }


  getAllGames(): Observable<any> {
    return this.http.get<any[]>(apiUrl + 'all');
  }

  getAllGamesByRating(): Observable<any> {
    return this.http.get<any[]>(apiUrl + "all/rating");
  }

  getAllGamesByPopularity(): Observable<any> {
    return this.http.get<any>(apiUrl + "all/popularity");
  }

  getAllGamesByAge(): Observable<any> {
    return this.http.get<any[]>(apiUrl + "all/age");
  }

  getAllGamesByMinPlayers(): Observable<any> {
    return this.http.get<any[]>(apiUrl + "all/minPlayers");
  }

  getAllGamesByStyleId(id: number): Observable<any> {
    return this.http.get<any[]>(apiUrl + "all/style/" + id);

  }

  getAllGamesByNameResearched(name: String): Observable<any> {
    return this.http.get<any>(apiUrl + "all/name/" + name);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<any>(apiUrl + 'id/' + id);
  }

  addGame(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'add', data);
  }


  updateGame(gameForm: FormGroup): Observable<any> {
    return this.http.put(apiUrl + "update", gameForm);
  }
}
