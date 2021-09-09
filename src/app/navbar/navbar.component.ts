import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {GameStyleService} from "../services/style.service";
import {GameService} from "../services/game.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cheminImage: any = "../assets/jeux-acc80-gogo.png";
  isLoggedIn!: boolean;
  admin!: boolean;
  styles!: any[];
  ages!: number[];
  minP!: number[];
  constructor(public authService: AuthService,
              private styleService: GameStyleService,
              private gameService: GameService,
              public userService: UserService,
              private router:Router) {

  }

  ngOnInit() {
    this.styleService.getStyles().subscribe(res =>
      this.styles = res);
    this.gameService.getAllGamesByAge().subscribe(ages =>
      this.ages = ages);
    this.gameService.getAllGamesByMinPlayers().subscribe(minP =>
      this.minP = minP);
  }

  onNavigateToStyleResearch(id:number){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
  this.router.navigate(['styleResearch/'+id]));
  }

  onNavigateToAgeResearch(id:number){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
      this.router.navigate(['ageResearch/'+id]));
  }
  onNavigateToPlayersResearch(id:number){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
      this.router.navigate(['playersResearch/'+id]));
  }
}
