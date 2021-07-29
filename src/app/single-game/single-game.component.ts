import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";

import {FormBuilder, FormGroup} from "@angular/forms";
import {CopyService} from "../services/copy.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {BorrowingService} from "../services/borrowing.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {
  copyForm!: FormGroup;
  username!: string | null;
  game!: any;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService,
              private copyService: CopyService,
              public authService: AuthService,
              public userService: UserService,
              private borrowingService: BorrowingService,
              private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.params['id'];
    this.gameService.getGameById(+id).subscribe(game =>
      this.game = game);
    this.username = localStorage.getItem('username');
  }

  initForm() {
    this.copyForm = this.formBuilder.group({code: ''});
  }

  onSubmitForm(copyForm: FormGroup) {
    this.copyService.addCopy(copyForm, this.game.id).subscribe(res => {
        this.router.navigate(['games'])
      },
      (error) => {
        console.log(error);
        alert('code existant');
      });

  }
onModifyGame(id:number){
    this.router.navigate(['modifyGame/'+id])
}
  navigateToGames() {
    this.router.navigate(['games']);
  }

  onBorrowingGame(gameId: number) {
    this.borrowingService.addBorrowingDemand(+gameId, localStorage.getItem('username')).subscribe(res => {
      this.router.navigate(['home'])
    });
  }

}
