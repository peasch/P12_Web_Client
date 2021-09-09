import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {GameStyleService} from "../services/style.service";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-name-research',
  templateUrl: './name-research.component.html',
  styleUrls: ['./name-research.component.css']
})
export class NameResearchComponent implements OnInit {
  researchName!:String;
  games!: any[];
  gameSubscription!: Subscription;
  constructor(private route: ActivatedRoute,public location:Location,
              private gameService: GameService,
              private router: Router) { }

  ngOnInit(): void {
    this.researchName=this.route.snapshot.params['name'];
    this.gameSubscription = this.gameService.getAllGamesByNameResearched(this.researchName)
      .subscribe(res =>
        this.games = res);

  }
  navigateBack() {
    this.location.back();
  }
  navigateToDetails(gameId: any) {
    this.router.navigate(['singleGame/' + gameId]);
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
  }
}
