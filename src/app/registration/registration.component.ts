import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService:AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password:['', [Validators.required]],
      birthDate:['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }
  onNavigateToLogin(){
    this.router.navigate(['login']);
  }

  onSubmitForm(userForm:FormGroup) {

    this.authService.register(userForm)
      .subscribe(res => {
        this.router.navigate(['login']);
      }, (res) => {

        console.log(res);
        alert(res.error);
      });
  }

}
