import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResearchParamsComponent } from './all-research-params.component';

describe('AllResearchParamsComponent', () => {
  let component: AllResearchParamsComponent;
  let fixture: ComponentFixture<AllResearchParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResearchParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResearchParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
