import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {GameStyleService} from "../services/style.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-age-research',
  templateUrl: './age-research.component.html',
  styleUrls: ['./age-research.component.css']
})
export class AgeResearchComponent implements OnInit {
  games!: any[];
  gameSubscription!: Subscription;
  age!:number;

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private styleService: GameStyleService,
              private router: Router) { }

  ngOnInit(): void {
    this.age=this.route.snapshot.params['id'];
    this.gameSubscription = this.gameService.getALlGamesByAgeMinResearched(this.route.snapshot.params['id'])
      .subscribe(res =>
        this.games = res);
  }

  navigateToDetails(gameId: any) {
    this.router.navigate(['singleGame/' + gameId]);
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
  }
}
