import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {Game} from "../models/game.model";
import {CookieService} from "ngx-cookie-service";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title = 'jeux à gogo';
  games!: any[];
  gamespop!: any[];
  game1!: Game;
  game2!: Game;
  game3!: Game;
  gamepop1!: Game;
  gamepop2!: Game;
  gamepop3!: Game;
  isLoggedIn!: boolean;
  user!: User;

  constructor(public authService: AuthService,
              private gameService: GameService,
              private cookie: CookieService,
              private userService: UserService,
              public router: Router) {
  }

  ngOnInit(): void {

    this.gameService.getAllGamesByRating().subscribe(res => {
      this.games = res;
      this.game1 = this.games[this.games.length - 1];
      this.game2 = this.games[this.games.length - 2];
      this.game3 = this.games[this.games.length - 3];

      this.gameService.getAllGamesByPopularity().subscribe(res2 => {
        this.gamespop = res2;
        this.gamepop1 = this.gamespop[this.games.length - 1];
        this.gamepop2 = this.gamespop[this.games.length - 2];
        this.gamepop3 = this.gamespop[this.games.length - 3];
      });
    });
    /*if (sessionStorage.getItem('token') != null) {
      this.isLoggedIn = true;
      this.userService.getUserDatas().subscribe(user =>
        this.user = user);
    } else {
      this.isLoggedIn = false;
    }*/

  }

  navigateToDetails(gameId: any) {
    this.router.navigate(['singleGame/' + gameId]);
  }
}
