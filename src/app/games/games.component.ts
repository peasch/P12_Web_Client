import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

   games!: any[];
  constructor(private router :Router,
              public gameService :GameService,
              public authService: AuthService) { }

  ngOnInit(): void {
  this.gameService.getAllGames().subscribe(
    games =>
      this.games=games);
  }

  navigateToGame(){

  }
}
