import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

import {AuthService} from "../services/auth.service";
import {ErrorStateMatcher} from "@angular/material/core";
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
value='Clear me';
  matcher = new MyErrorStateMatcher();
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
      password: ['',[Validators.required]],
      username: ['',[Validators.required]]
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
    this.userService.resolvingToken();
    this.router.navigate(['']);

  }

  onNavigateToRegister(){
    this.router.navigate(['registration']);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authService.logout();
    this.isLoggedIn=this.authService.isLoggedIn;
  }

}
