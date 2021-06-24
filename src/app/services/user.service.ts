import {User} from '../models/user.model';
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  private users!: User[];
  userSubject = new Subject<User[]>();

 constructor(private httpClient:HttpClient) {
 }
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
  saveUser(user:User){
    this.httpClient
      .post('http://localhost:8989/auth/register',user)
      .subscribe(
        () => {
          console.log('enregistrement utilisateur');
        },
        (error) => {
          console.log('erreur :' + error );

        }
      );
  }
  login(user:User){
   this.httpClient
     .post('http://localhost:8989/auth/login',user)
     .subscribe(
       () => {
         console.log('connecté');
       },
       (error) => {
         console.log('erreur :' + error );

       }
     );
  }
}

