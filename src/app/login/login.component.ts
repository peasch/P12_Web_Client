import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn!: boolean;
  userLoginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userLoginForm = this.formBuilder.group({
      password: '',
      username: ''
    });
  }

  onSubmitFormLogin(userForm: FormGroup) {
    this.authService.login(userForm)
      .subscribe(res => {
        console.log(res);
        if (res) {
          localStorage.setItem('token', res);
          this.router.navigate(['']);
        }
      }, (err) => {
        console.log(err);
      });
    this.isLoggedIn = this.authService.isLoggedIn;
    // @ts-ignore
    this.userService.resolvingToken(localStorage.getItem('token'));
    this.router.navigate(['']);

  }

  logout(){
    this.authService.logout();
    this.isLoggedIn=this.authService.isLoggedIn;
  }

}
