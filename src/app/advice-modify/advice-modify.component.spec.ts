import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceModifyComponent } from './advice-modify.component';

describe('AdviceModifyComponent', () => {
  let component: AdviceModifyComponent;
  let fixture: ComponentFixture<AdviceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
