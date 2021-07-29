import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BorrowingService} from "../services/borrowing.service";

@Component({
  selector: 'app-borrowing-management',
  templateUrl: './borrowing-management.component.html',
  styleUrls: ['./borrowing-management.component.css']
})
export class BorrowingManagementComponent implements OnInit {

  borrowings!:any[];

  constructor(private router:Router,
              public borrowingService:BorrowingService) { }

  ngOnInit(): void {
    this.borrowingService.getAllBorrowings().subscribe(borrowings =>
    this.borrowings=borrowings)
  }

}
