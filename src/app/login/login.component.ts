import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

import {AuthService} from "../services/auth.service";
import {ErrorStateMatcher} from "@angular/material/core";
import {CookieService} from "ngx-cookie-service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn!: boolean;
  userLoginForm!: FormGroup;
  value = 'Clear me';
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private cookieService:CookieService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userLoginForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  onSubmitFormLogin(userForm: FormGroup) {
    this.authService.login(userForm)
      .subscribe(res => {
        console.log(res);
        if (res) {
          sessionStorage.setItem('token', res);
          this.router.navigate(['home']);
        }
      }, (err) => {
        console.log(err);
      });
    this.isLoggedIn = this.authService.isLoggedIn;
    this.userService.resolvingToken();
    this.router.navigate(['home']);

  }

  onNavigateToRegister() {
    this.router.navigate(['registration']);
  }
  navigateToPassword(){
    this.router.navigate(['password']);
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');

    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
  }



}
