import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {BorrowingService} from "../services/borrowing.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  token!: string | null;
  users!:Set<User>;
  free!:boolean;
  constructor(private router: Router,
              public authService: AuthService,

              public userService: UserService) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.userService.getUsers().subscribe(users =>
      this.users=users);

  }

  navigateToUserUpdate(id:number){
    this.router.navigate(['userUpdate/'+id]);
  }

}
