import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userLoginForm = this.formBuilder.group({
      password: '',
      userName: ''
    });
  }

  onSubmitForm() {
    const formValue = this.userLoginForm.value;
    const newLoginUser = new User(
      formValue['firstName'],
      formValue['name'],
      formValue['email'],
      formValue['birthdate'],
      formValue['password'],
      formValue['userName']
    );
    // this.userService.addUser(newUser);
    this.userService.login(newLoginUser);

    this.router.navigate(['']);
  }

}
