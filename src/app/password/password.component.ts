import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MyErrorStateMatcher} from "../login/login.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password:''
    });
  }

  onSubmitFormLogin(resetPasswordForm: FormGroup) {
    this.userService.sendMailToResetPassword(resetPasswordForm).subscribe(result =>
      this.router.navigate(['login']));
  }

}
