import {User} from '../models/user.model';
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Role} from "../models/role.model";
import {FormGroup} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";


const apiUrl = 'http://localhost:8989/user/';

@Injectable()
export class UserService {
  user!: User;
  admin!: boolean;
  roles!: Set<Role>;
  userSubject = new Subject<User[]>();
  username!: string;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private jwtHelperService: JwtHelperService) {
  }


  resolvingToken(): String {
    // @ts-ignore
    const decodedoken = this.jwtHelperService.decodeToken(sessionStorage.getItem('token'));
    sessionStorage.setItem('username', decodedoken.sub);
    return decodedoken.sub;

  }

  getRoleOfToken(): Set<Role> {
    // @ts-ignore
    const decodeToken = this.jwtHelperService.decodeToken(sessionStorage.getItem('token'));
    return decodeToken.roles;
  }


  getUserDatas(): Observable<User> {
    return this.http.get<any>(apiUrl + 'username/' + this.resolvingToken());

  }

  getUserDatasById(id: number): Observable<User> {
    return this.http.get<any>(apiUrl + id);

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

  isMember(): boolean {
    this.roles = this.getRoleOfToken();

    for (let role of this.roles) {
      if ((role.role === 'MODERATOR') || (role.role === 'MEMBER') || (role.role === 'ADMIN')) {
        return true;
      }
    }
    return false;

  }

  getUsers(): Observable<Set<User>> {
    return this.http.get<any>(apiUrl + 'all');

  }

  addRoleToUser(form: FormGroup, id: number): Observable<any> {
    return this.http.put(apiUrl + "addRole/" + id, form);
  }

  removeRoleToUser(id: number, user: User): Observable<any> {
    return this.http.put(apiUrl + "removeRole/" + id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(apiUrl + "delete/" + id);
  }

  sendMailToResetPassword(data: any): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(apiUrl + 'sendResetMail', data);
  }

  resetPassword(params: HttpParams, data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'resetPassword', data, {params: params});
  }

}


