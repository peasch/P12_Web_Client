import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeux à gogo';
  user!:User;
  logged= false;

  constructor(private cookie:CookieService,
              private authService:AuthService,
              private userService:UserService) {
  }
  ngOnInit() {
   if(sessionStorage.getItem('token')!==null){
     this.authService.isLoggedIn=true;
     this.userService.getUserDatas().subscribe(user=>
       this.user=user);
   }
  }

}
