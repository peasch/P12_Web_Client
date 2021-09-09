import { Component, OnInit } from '@angular/core';
import {WaitList} from "../models/WaitList.model";
import {WaitListService} from "../services/waitList.service";

@Component({
  selector: 'app-wait-list-management',
  templateUrl: './wait-list-management.component.html',
  styleUrls: ['./wait-list-management.component.css']
})
export class WaitListManagementComponent implements OnInit {
 waitLists!:WaitList[];
  constructor(private waitListService:WaitListService) { }

  ngOnInit(): void {
    this.waitListService.getAllWaitList().subscribe(res=>{
    this.waitLists=res;
    });
  }

  onDeleteWaitList(id:number){
    this.waitListService.deleteWaitList(id).subscribe(res=>{
      this.ngOnInit();
    })
  }

}
