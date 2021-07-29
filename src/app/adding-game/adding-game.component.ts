import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {GameStyleDto} from "../models/gameStyleDto.model";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-adding-game',
  templateUrl: './adding-game.component.html',
  styleUrls: ['./adding-game.component.css'],
})
export class AddingGameComponent implements OnInit {

  gameForm!: FormGroup;
  gameStyles!: Set<GameStyleDto>;
  game!: Game;


  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              public gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
    this.gameService.getGameStyleList().subscribe(
      gameStyles => this.gameStyles = gameStyles);
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      name: '',
      ageMin: '',
      gameStyleDto: this.formBuilder.group(
        {
          id: '',
          name: ''
        }
      ),
      minPlayers: '',
      maxPlayers: '',
      duration: '',
      rulesLink: '',
      description:''
    });
  }

  onSubmitForm(gameForm: FormGroup) {

    this.gameService.addGame(gameForm).subscribe(res => {
        this.router.navigate(['games'])
      },
      (error) => {
        console.log(error);
        alert(error);
      }
    );
  }
}
