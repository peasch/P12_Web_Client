import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BorrowingService} from "../services/borrowing.service";

@Component({
  selector: 'app-borrowing-management',
  templateUrl: './borrowing-management.component.html',
  styleUrls: ['./borrowing-management.component.css']
})
export class BorrowingManagementComponent implements OnInit {

  borrowings!: any[];
  unreturneds!: any[];
  pendings!: any[];
  returneds!: any[];

  constructor(private router: Router,
              public borrowingService: BorrowingService) {
  }

  ngOnInit(): void {
    this.borrowingService.getAllBorrowings().subscribe(borrowings =>
      this.borrowings = borrowings)
    this.borrowingService.getUnreturnedBorrowings().subscribe(unreturned =>
      this.unreturneds = unreturned);
    this.borrowingService.getPendingBorrowings().subscribe(pendings =>
      this.pendings = pendings);
    this.borrowingService.getReturnedBorrowings().subscribe(returned =>
      this.returneds = returned);

  }

  onReturnBorrowing(id: number) {
    this.borrowingService.returnBorrowing(id).subscribe(
      res =>
        this.ngOnInit());
  }

  onValidBorrowing(id: number) {
    this.borrowingService.validBorrowing(id).subscribe(
      res => this.ngOnInit());
  }

  onDeleteBorrowing(id: number) {
    this.borrowingService.deleteBorrowingDemand(id).subscribe(res =>
      this.ngOnInit());
  }
}
