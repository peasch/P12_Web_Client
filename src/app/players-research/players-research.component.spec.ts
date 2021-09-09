import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersResearchComponent } from './players-research.component';

describe('PlayersResearchComponent', () => {
  let component: PlayersResearchComponent;
  let fixture: ComponentFixture<PlayersResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
