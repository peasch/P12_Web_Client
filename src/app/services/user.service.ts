import {User} from '../models/user.model';
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Role} from "../models/role.model";


const apiUrl = 'http://localhost:8989/user/';

@Injectable()
export class UserService {
  user!: User;
  admin!: boolean;
  roles!: Set<Role>;
  userSubject = new Subject<User[]>();

  constructor(private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }


  resolvingToken(): String {

    // @ts-ignore
    const decodedoken = this.jwtHelperService.decodeToken(localStorage.getItem('token'));
    localStorage.setItem('username',decodedoken.sub);
    return decodedoken.sub;

  }

  getRoleOfToken(): Set<Role> {
    // @ts-ignore
    const decodeToken = this.jwtHelperService.decodeToken(localStorage.getItem('token'));
    return decodeToken.roles;
  }


  getUserDatas(): Observable<User> {
    return this.http.get<any>(apiUrl + 'username/' + this.resolvingToken());

  }

  isAdmin(): boolean {
    this.roles = this.getRoleOfToken();

      for (let role of this.roles) {
        if (role.role === 'ADMIN') {
          return true;
        }
      }
      return false;

  }
  isModo(): boolean {
    this.roles = this.getRoleOfToken();

    for (let role of this.roles) {
      if (role.role === 'MODERATOR') {
        return true;
      }
    }
    return false;

  }
  getUsers(): Observable<Set<User>> {
    return this.http.get<any>(apiUrl + 'all');

  }
}


