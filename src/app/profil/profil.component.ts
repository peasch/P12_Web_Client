import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user.model";
import {Subject, Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {BorrowingService} from "../services/borrowing.service";
import {CopyService} from "../services/copy.service";
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
username!:string | null;
  borrowings!:any[];

  constructor(private router: Router,
              public authService: AuthService,
              public userService: UserService,
              public gameService: GameService,
              private borrowingService:BorrowingService) {
  }


  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.userService.getUserDatas()
      .subscribe(
        user=> this.user=user);

    let username = localStorage.getItem('username');
    this.borrowingService.getAllBorrowingsByUsername(username).subscribe(borrowings =>
      this.borrowings=borrowings);
  }


}

