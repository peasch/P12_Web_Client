import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingManagementComponent } from './borrowing-management.component';

describe('BorrowingManagementComponent', () => {
  let component: BorrowingManagementComponent;
  let fixture: ComponentFixture<BorrowingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
