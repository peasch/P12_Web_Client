import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";

import {FormBuilder, FormGroup} from "@angular/forms";
import {CopyService} from "../services/copy.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {BorrowingService} from "../services/borrowing.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WaitListService} from "../services/waitList.service";
import {Location} from "@angular/common";
import {WaitList} from "../models/WaitList.model";
import {User} from "../models/user.model";

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {
  @ViewChild('player') player: any;
  copyForm!: FormGroup;
  username!: string | null;
  game!: any;
  gameId!: number;
  rulesLink!: SafeResourceUrl;
  userOnWaitList!: boolean;
  waitListOfGame!: WaitList[];
  user!: User;


  constructor(private router: Router,
              public location: Location,
              private route: ActivatedRoute,
              private gameService: GameService,
              private copyService: CopyService,
              public authService: AuthService,
              public userService: UserService,
              public waitListService: WaitListService,
              private borrowingService: BorrowingService,
              private formBuilder: FormBuilder,
              public sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.initForm();
    this.userService.getUserDatas().subscribe(user => {
      this.user = user;
      this.waitListService.isOnWaitList(this.gameId, this.user.username).subscribe(res =>
        this.userOnWaitList = res);
      this.username = sessionStorage.getItem('username')
    });
    this.gameId = this.route.snapshot.params['id'];
    this.gameService.getGameById(this.gameId).subscribe(game =>
      this.game = game);
    this.rulesLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.game.rulesLink);

    this.waitListService.getWaitlistByGameId(this.route.snapshot.params['id']).subscribe(waitlist =>
      this.waitListOfGame = waitlist);
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


  onModifyGame(id: number) {
    this.router.navigate(['modifyGame/' + id])
  }

  navigateToGames() {
    this.location.back();
  }

  navigateToProfile() {
    this.router.navigate(['profil']);
  }

  onBorrowingGame(gameId: number) {
    this.borrowingService.addBorrowingDemand(+gameId, this.user.username).subscribe(res => {
      this.router.navigate(['home'])
    });
  }

  onAddWaitList(gameId: number) {
    this.waitListService.addWaitListToGame(gameId, this.user.username).subscribe(res => {
        this.ngOnInit();
      },
      error =>
        alert("Liste d'attente impossible."));
  }
}
