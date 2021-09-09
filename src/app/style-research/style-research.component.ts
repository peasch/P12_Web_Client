import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {Subscription} from "rxjs";
import {GameStyleService} from "../services/style.service";
import {GameStyleDto} from "../models/gameStyleDto.model";

@Component({
  selector: 'app-style-research',
  templateUrl: './style-research.component.html',
  styleUrls: ['./style-research.component.css']
})
export class StyleResearchComponent implements OnInit, OnDestroy {
  styleId!: number;
  games!: any[];
  gameSubscription!: Subscription;
  style!: GameStyleDto;

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private styleService: GameStyleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.styleService.getStyleById(this.route.snapshot.params['id']).subscribe(result =>
      this.style = result);
    this.gameSubscription = this.gameService.getAllGamesByStyleId(this.route.snapshot.params['id'])
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
