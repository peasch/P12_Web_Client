import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cheminImage: any = "../assets/jeux-acc80-gogo.png";
  isLoggedIn!: boolean;
  admin!: boolean;

  constructor(public authService: AuthService,
              public userService: UserService) {

  }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('token');
    this.authService.logout();
  }

}
