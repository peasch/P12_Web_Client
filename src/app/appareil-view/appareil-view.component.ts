import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;


  lastUpdate = new Date();


  apparels: any[] | undefined;

  cheminImage: any = "../assets/img/jeux-acc80-gogo.png";

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  }

  ngOnInit() {
    this.apparels= this.appareilService.appareils
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
