import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title='jeux à gogo';
  constructor(public authService:AuthService) { }

  ngOnInit(): void {

  }

}
