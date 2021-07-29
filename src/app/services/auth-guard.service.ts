import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService,
              private userService:UserService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.authService.isLoggedIn)&&(this.userService.isAdmin() || this.userService.isModo())) {
      return true;
    } else {
      return this.router.navigate(['/login']);
    }
  }
}
