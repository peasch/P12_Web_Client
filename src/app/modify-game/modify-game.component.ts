import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GameStyleDto} from "../models/gameStyleDto.model";
import {GameStyleService} from "../services/style.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-modify-game',
  templateUrl: './modify-game.component.html',
  styleUrls: ['./modify-game.component.css']
})
export class ModifyGameComponent implements OnInit {
  gameForm!: FormGroup;
  username!: string | null;
  game!: any;
  id!: number;
  name!: string;
  gameStyles!: Set<GameStyleDto>;

  constructor(private router: Router,
              public gameService: GameService,
              private styleService: GameStyleService,
              public authService: AuthService,
              public userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) {
  }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      id: '',
      name: '',
      ageMin: '',
      gameStyleDto: this.formBuilder.group(
        {
          id: '',
          name: ''
        }),
      minPlayers: '',
      maxPlayers: '',
      duration: '',
      rulesLink: '',
      description: '',
      coverLink: '',
      rating: '',
      borrowingQuantity: '',
      available: ''
    });
    this.initForm();
    this.styleService.getStyles().subscribe(
      gameStyles => this.gameStyles = gameStyles);
    this.username = sessionStorage.getItem('username');

  }

  initForm() {
    this.id = this.route.snapshot.params['id'];
    this.gameService.getGameById(+this.id).subscribe(
      game => {
        this.gameForm.patchValue({
          'id': game?.id,
          'name': game?.name,
          'ageMin': game?.ageMin,
          'minPlayers': game?.minPlayers,
          'maxPlayers': game?.maxPlayers,
          'duration': game?.duration,
          'rulesLink': game?.rulesLink,
          'description': game?.description,
          'gameStyleDto': game?.gameStyleDto,
          'coverLink': game?.coverLink,
          'borrowingQuantity': game?.borrowingQuantity,
          'rating': game?.rating,
          'available': game?.available
        })
      });
  }

  navigateBack() {
    this.location.back();
  }


  onModifyGame(gameForm: FormGroup) {

    console.log(gameForm);
    this.gameService.updateGame(gameForm).subscribe(res => {
        this.router.navigate(['singleGame/' + this.id]);
      }, error => {
        console.log(error)
      }
    )
  }
}
