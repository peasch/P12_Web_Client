import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {error} from "@angular/compiler/src/util";
import {UserService} from "../services/user.service";
const apiUrl = 'http://localhost:8989/';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  token!: string | null;
  user!:Observable<User>;

  constructor(private router: Router,
             public authService: AuthService,
              public userService:UserService,
              private http:HttpClient) {
  }

  ngOnInit() {
    this.token=localStorage.getItem('token');
    this.getUserProfile();

  }
  getUserProfile():void{
    this.user =this.userService.getUserProfilFromServer()

  }


}

