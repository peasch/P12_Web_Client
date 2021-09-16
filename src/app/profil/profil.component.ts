import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user.model";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {BorrowingService} from "../services/borrowing.service";
import {GameService} from "../services/game.service";
import {CookieService} from "ngx-cookie-service";
import {WaitListService} from "../services/waitList.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit, OnDestroy {

  token!: string | null;
  userSubscription!: Subscription;
  user!: User;
  username!: string | null;
  borrowings!: any[];
  pendings!: any[];
  returneds!: any[];
  waitLists!: any[];

  constructor(private router: Router,
              private location:Location,
              public authService: AuthService,
              public userService: UserService,
              public gameService: GameService,
              private cookieService: CookieService,
              private waitlistService: WaitListService,
              private borrowingService: BorrowingService) {
  }


  ngOnInit() {
    this.token = sessionStorage.getItem('token');
    this.userSubscription = this.userService.getUserDatas()
      .subscribe(
        user => {
          this.user = user;
          this.waitlistService.getWaitlistByUserId(user.id).subscribe(waitlists =>
            this.waitLists = waitlists);
        });

    let username = sessionStorage.getItem('username');
    this.borrowingService.getPendingBorrowingsByUsername(username).subscribe(pendings =>
      this.pendings = pendings);
    this.borrowingService.getUnreturnedBorrowingsByUsername(username).subscribe(borrowings =>
      this.borrowings = borrowings);
    this.borrowingService.getReturnedBorrowingsByUsername(username).subscribe(returneds =>
      this.returneds = returneds);

  }

  navigateToDetails(gameId: any) {
    this.router.navigate(['singleGame/' + gameId]);
  }

  onDeleteBorrowing(id: number) {
    this.borrowingService.deleteBorrowingDemand(id).subscribe(res =>
      this.ngOnInit());
  }

  onBorrowingFromWL(gameId: number) {
    this.borrowingService.addBorrowingFromWaitList(+gameId, sessionStorage.getItem('username')).subscribe(res => {
      this.ngOnInit()
    });
  }
  onDeleteWL(id:number){
    this.waitlistService.skipWaitLister(id).subscribe(res=>
    this.ngOnInit());
  }
  navigateBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

