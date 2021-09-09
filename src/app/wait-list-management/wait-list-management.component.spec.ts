import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitListManagementComponent } from './wait-list-management.component';

describe('WaitListManagementComponent', () => {
  let component: WaitListManagementComponent;
  let fixture: ComponentFixture<WaitListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitListManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
