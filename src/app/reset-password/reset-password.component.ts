import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PasswordValidator} from "../shared/password.validator";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  userResetPassword!: string;
  token!: string;

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      password:[''],
      confirmPassword:['']
    },{validator:PasswordValidator});

    this.route.queryParams
      .subscribe(params => {
          console.log(params); // { order: "popular" }

          this.userResetPassword = params.token;
          console.log(this.userResetPassword); // popular
        }
      );
  }

  onSubmitForm(resetForm: FormGroup) {
    let params = new HttpParams();
    params = params.append('token',this.userResetPassword);
    this.userService.resetPassword(params,resetForm).subscribe(res=>{
      this.router.navigate(['login']);
    });
  }

}
