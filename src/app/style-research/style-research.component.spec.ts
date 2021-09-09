import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleResearchComponent } from './style-research.component';

describe('StyleResearchComponent', () => {
  let component: StyleResearchComponent;
  let fixture: ComponentFixture<StyleResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
