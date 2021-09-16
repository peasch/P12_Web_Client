import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Advice} from "../models/adviceDto.model";
import {AdviceService} from "../services/advice.service";
import {User} from "../models/user.model";
import {Game} from "../models/game.model";


@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  adviceForm!: FormGroup;
  advices!: Advice[];
  @Input() id!: number;
  username!: string;
  user!: User;
  game!: Game;
  adviceDto!: Advice;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService,
              private formBuilder: FormBuilder,
              public authService: AuthService,
              public userService: UserService,
              public adviceService: AdviceService) {
  }

  ngOnInit(): void {

    this.adviceForm = this.formBuilder.group({
      commentary: '',
      rating: '',
      username: ''
    });
    this.userService.getUserDatas().subscribe(res => {
      this.user = res;
      this.adviceForm.patchValue({
        'username': this.user?.username
      })
    });
    this.gameService.getGameById(this.id).subscribe(game =>
      this.game = game);
    this.adviceService.getAdvicesByGameId(this.id).subscribe(res =>
      this.advices = res);

    this.username = this.user.username;

  }

  deleteAdvice(id:number){
    console.log(id);
    console.log(this.advices[id]);
    console.log(this.advices[id].id);
      this.adviceService.delete(this.advices[id].id).subscribe(res=>
      this.ngOnInit());


  }

  onSubmitForm(adviceForm: FormGroup) {
    console.log(adviceForm);
     this.adviceService.add(this.id, adviceForm).subscribe(res => {
         this.ngOnInit()
       },
       (error) => {
         alert('vous ne pouvez pas poster un autre avis');
       });
  }

  onModifyAvice(id:number){
    this.router.navigate(['modifyAdvice/'+id]);
  }

}
