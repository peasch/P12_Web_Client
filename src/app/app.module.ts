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
import { GamesComponent } from './games/games.component';
import { SingleGameComponent } from './single-game/single-game.component';
import {GameService} from "./services/game.service";
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./services/auth-guard.service";
import { AddingGameComponent } from './adding-game/adding-game.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import {CopyService} from "./services/copy.service";
import { BorrowingManagementComponent } from './borrowing-management/borrowing-management.component';
import {BorrowingService} from "./services/borrowing.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { ModifyGameComponent } from './modify-game/modify-game.component';
import { AdvicesComponent } from './advices/advices.component';
import {AdviceService} from "./services/advice.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { VideoComponent } from './video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { UserModifyComponent } from './user-modify/user-modify.component';
import {RoleService} from "./services/role.service";

registerLocaleData(localeFr, 'fr-FR',localeFrExtra);

const appRoutes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'profil', component:ProfilComponent},
  {path:'games',component:GamesComponent},
  {path:'addGame',canActivate:[AuthGuard],component:AddingGameComponent},
  {path:'singleGame/:id',component:SingleGameComponent},
  {path:'modifyGame/:id',component:ModifyGameComponent},
  {path:'emprunt',canActivate:[AuthGuard],component:BorrowingManagementComponent},
  {path:'home', component:HomeComponent},
  {path:'userAdmin',canActivate:[AuthGuard],component:UserManagementComponent},
  {path:'userUpdate/:id',canActivate:[AuthGuard],component:UserModifyComponent},
  {path:'not-found', component:FourOhFourComponent},
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:'/not-found'}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
    ProfilComponent,
    NavbarComponent,
    GamesComponent,
    SingleGameComponent,
    FourOhFourComponent,
    HomeComponent,
    AddingGameComponent,
    UserManagementComponent,
    BorrowingManagementComponent,
    ModifyGameComponent,
    AdvicesComponent,
    VideoComponent,
    UserModifyComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    YouTubePlayerModule,


  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    GameService,
    CopyService,
    BorrowingService,
    AdviceService,
    RoleService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
