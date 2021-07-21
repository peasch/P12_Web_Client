import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-add-copy',
  templateUrl: './add-copy.component.html',
  styleUrls: ['./add-copy.component.css']
})
export class AddCopyComponent implements OnInit {

game!:any;
gameId!:number;

  constructor(private router :Router,
              public gameService :GameService,
              public authService: AuthService,
              public userService:UserService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.gameService.getGameById(this.route.snapshot.params['id']).subscribe(
      game =>this.game=game);

  }

}
