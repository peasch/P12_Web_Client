import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      name: '',
      email: '',
      password: '',
      birthdate: '',
      userName: ''
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['name'],
      formValue['email'],
      formValue['birthdate'],
      formValue['password'],
      formValue['userName']
    );
    // this.userService.addUser(newUser);
    this.userService.saveUser(newUser);
    this.router.navigate(['']);
  }


}
