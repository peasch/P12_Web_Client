import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user.model";
import {Subject} from "rxjs";
import {UserService} from "../services/user.service";
import {BorrowingService} from "../services/borrowing.service";
import {GameService} from "../services/game.service";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  token!: string | null;
  userSubject = new Subject<User>();
  user!: User;
  username!: string | null;
  borrowings!: any[];
  pendings!: any[];
  returneds!:any[];
  constructor(private router: Router,
              public authService: AuthService,
              public userService: UserService,
              public gameService: GameService,
              private borrowingService: BorrowingService) {
  }


  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.userService.getUserDatas()
      .subscribe(
        user => this.user = user);

    let username = localStorage.getItem('username');
    this.borrowingService.getPendingBorrowingsByUsername(username).subscribe(pendings =>
      this.pendings = pendings);
    this.borrowingService.getUnreturnedBorrowingsByUsername(username).subscribe(borrowings =>
      this.borrowings = borrowings);
    this.borrowingService.getReturnedBorrowingsByUsername(username).subscribe(returneds =>
    this.returneds=returneds);
  }
  navigateToDetails(gameId :any){
    this.router.navigate(['singleGame/'+gameId]);
  }

  onDeleteBorrowing(id: number) {
    this.borrowingService.deleteBorrowingDemand(id).subscribe(res =>
      this.ngOnInit());
  }
}

