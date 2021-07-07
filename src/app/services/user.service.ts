import {User} from '../models/user.model';
import {Observable, of, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';
import {catchError, tap} from "rxjs/operators";


const apiUrl = 'http://localhost:8989/user/';

@Injectable()
export class UserService {

  userSubject = new Subject<User[]>();

  constructor(private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }



  resolvingToken(): String {

    // @ts-ignore
    const decodedoken = this.jwtHelperService.decodeToken(localStorage.getItem('token'));
    console.log(decodedoken);
    return decodedoken.sub;

  }



  getUserDatas(): Observable<User>{
    return this.http.get<any>(apiUrl +'username/' + this.resolvingToken());

  }

}


