import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, NgForm} from "@angular/forms";
import {BorrowingService} from "../services/borrowing.service";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
researchForm!:FormGroup;
   games!: any[];
  constructor(private router :Router,
              public gameService :GameService,
              public authService: AuthService,
              public userService:UserService,
              public borrowingService:BorrowingService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.gameService.getAllGames().subscribe(
    games =>
      this.games=games);
  this.researchForm=this.formBuilder.group({
    name:''
  })

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
