import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName="" ;
  @Input()appareilStatus="" ;
  @Input() indexOfAppareil=0;
  @Input() id:number=0;
  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
  }

  getStatus(){
   return this.appareilStatus;
  }
  // @ts-ignore
  getColor(){
    if (this.appareilStatus==='dispo'){
      return 'green';
    } else if (this.appareilStatus==='indispo'){
      return 'red';
    }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
