import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {

  constructor(private router :Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
  }

}
