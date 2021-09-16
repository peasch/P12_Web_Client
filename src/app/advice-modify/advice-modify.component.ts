import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Game} from "../models/game.model";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {AdviceService} from "../services/advice.service";
import {Advice} from "../models/adviceDto.model";

@Component({
  selector: 'app-advice-modify',
  templateUrl: './advice-modify.component.html',
  styleUrls: ['./advice-modify.component.css']
})
export class AdviceModifyComponent implements OnInit {
  advice!: Advice;
  adviceUpdateForm!: FormGroup;
  game!: Game;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService,
              private formBuilder: FormBuilder,
              public authService: AuthService,
              public userService: UserService,
              public adviceService: AdviceService) {
  }

  ngOnInit(): void {
    this.adviceService.getAdviceById(this.route.snapshot.params['id']).subscribe(advice =>{
      this.advice = advice;
    this.gameService.getGameById(this.advice.game.id).subscribe(game=>
    this.game=game)});
    this.adviceUpdateForm = this.formBuilder.group({
      commentary: '',
      rating: '',
      username:'',
      user:'',
      game:''
    });

    this.initForm();
  }

  initForm() {
    this.adviceService.getAdviceById(+this.route.snapshot.params['id']).subscribe(advice => {
      this.adviceUpdateForm.patchValue({
        'commentary': advice?.commentary,
        'rating': advice?.rating,
        'game':advice?.game,
        'user':advice?.user,
        'username':advice?.username

      })
    })
  }


  onModifyAdvice(adviceUpdateForm: FormGroup) {

    this.adviceService.update(this.route.snapshot.params['id'],adviceUpdateForm).subscribe(res => {
        this.router.navigate(['singleGame/' + this.game.id]);
      }, error => {
        console.log(error)
      }
    )
  }

}
