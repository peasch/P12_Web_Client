import {User} from '../models/user.model';
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {JwtHelperService} from '@auth0/angular-jwt';
import {colors} from "@angular/cli/utilities/color";


const apiUrl = 'http://localhost:8989/user/';

@Injectable()
export class UserService {
   user!:User;
  userSubject = new Subject<User[]>();

  constructor(private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }



  resolvingToken(): String {

    // @ts-ignore
    const decodedtoken = this.jwtHelperService.decodeToken(localStorage.getItem('token'));
    console.log(decodedtoken);
    return decodedtoken.sub;

  }

  // @ts-ignore
  getUserProfilFromServer():Observable<User> {
   this.http.get<User>(apiUrl + 'username/' + this.resolvingToken()).subscribe((response) => {
     console.log(response);
     this.user=response;
      },(error => {
        console.log('erreur :' + error);
     })
    )
  }
}

