import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import {AuthService} from "./services/auth.service";
import { ProfilComponent } from './profil/profil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JwtModule } from "@auth0/angular-jwt";
const appRoutes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'profil',component:ProfilComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
    ProfilComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('token')
      }
    })
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
