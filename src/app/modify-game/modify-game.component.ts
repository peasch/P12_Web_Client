import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GameStyleDto} from "../models/gameStyleDto.model";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-modify-game',
  templateUrl: './modify-game.component.html',
  styleUrls: ['./modify-game.component.css']
})
export class ModifyGameComponent implements OnInit {
  gameForm!: FormGroup;
  username!: string | null;
  game!:any;

  name!: string;
  gameStyles!: Set<GameStyleDto>;

  constructor(private router: Router,
              public gameService: GameService,
              public authService: AuthService,
              public userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.params['id'];
    this.gameService.getGameStyleList().subscribe(
      gameStyles => this.gameStyles = gameStyles);
    this.gameService.getGameById(+id).subscribe(game =>
      this.game = game);

    this.username = localStorage.getItem('username');

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
      description: ''
    });
  }

  onModifyGame(gameForm: FormGroup) {

    console.log(gameForm.value['name']);
  }
}
