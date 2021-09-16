import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, NgForm} from "@angular/forms";
import {BorrowingService} from "../services/borrowing.service";
import {Game} from "../models/game.model";
import {GameStyleService} from "../services/style.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
researchForm!:FormGroup;
   games!: any[];
  styles!: any[];
  ages!: number[];
  minP!: number[];
  constructor(private router :Router,
              public gameService :GameService,
              public authService: AuthService,
              public userService:UserService,
              private styleService:GameStyleService,
              public borrowingService:BorrowingService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.gameService.getAllGames().subscribe(
    games =>
      this.games=games);
    this.styleService.getStyles().subscribe(res =>
      this.styles = res);
    this.gameService.getAllGamesByAge().subscribe(ages =>
      this.ages = ages);
    this.gameService.getAllGamesByMinPlayers().subscribe(minP =>
      this.minP = minP);
  this.researchForm=this.formBuilder.group({
    name:''
  });
  }

  navigateToAddGame(){
    this.router.navigate(['addGame']);
  }

  navigateToDetails(gameId :any){
    this.router.navigate(['singleGame/'+gameId]);
  }


  onSubmitForm(researchForm:FormGroup){
    // @ts-ignore
    var name=researchForm.name;
    this.router.navigate(['nameResearch/'+ name]);
  }

  navigateToBorrowings(){
    this.router.navigate(['emprunt']);
  }

}
