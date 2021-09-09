import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeResearchComponent } from './age-research.component';

describe('AgeResearchComponent', () => {
  let component: AgeResearchComponent;
  let fixture: ComponentFixture<AgeResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
