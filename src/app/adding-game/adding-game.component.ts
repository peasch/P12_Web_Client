import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-adding-game',
  templateUrl: './adding-game.component.html',
  styleUrls: ['./adding-game.component.css'],
})
export class AddingGameComponent implements OnInit {

  gameForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      name: '',
      ageMin: '',
      minPlayers: '',
      maxPlayers:'',
      duration: '',
      rulesLink: ''
    });
  }

  onSubmitForm(gameForm:FormGroup) {
    this.gameService.addGame(gameForm).subscribe(res =>
      this.router.navigate(['games']));
  }
}
