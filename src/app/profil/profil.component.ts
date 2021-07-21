import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user.model";
import {Subject, Subscription} from "rxjs";
import {UserService} from "../services/user.service";



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  token!: string | null;
  userSubject = new Subject<User>();
  user!: User;
  users!:Set<User>;

  constructor(private router: Router,
              public authService: AuthService,
              public userService: UserService) {
  }


  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.userService.getUserDatas()
      .subscribe(
        user=> this.user=user);

  }


}

