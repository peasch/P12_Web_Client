import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title='jeux à gogo';
  constructor(public authService:AuthService,
              public router:Router) { }

  ngOnInit(): void {

  }
navigateToDetails(gameId :any){
    this.router.navigate(['singleGame/'+gameId]);
  }
}
