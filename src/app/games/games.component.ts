import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {ControlContainer, FormGroupDirective} from "@angular/forms";
import {BorrowingService} from "../services/borrowing.service";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {

   games!: any[];
  constructor(private router :Router,
              public gameService :GameService,
              public authService: AuthService,
              public userService:UserService,
              public borrowingService:BorrowingService) { }

  ngOnInit(): void {
  this.gameService.getAllGames().subscribe(
    games =>
      this.games=games);

  }

  navigateToAddGame(){
    this.router.navigate(['addGame']);
  }

  navigateToDetails(gameId :any){
    this.router.navigate(['singleGame/'+gameId]);
  }


  navigateToBorrowings(){
    this.router.navigate(['emprunt']);
  }

}
