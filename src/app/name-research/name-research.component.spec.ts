import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameResearchComponent } from './name-research.component';

describe('NameResearchComponent', () => {
  let component: NameResearchComponent;
  let fixture: ComponentFixture<NameResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
