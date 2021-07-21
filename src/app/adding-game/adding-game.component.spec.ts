import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingGameComponent } from './adding-game.component';

describe('AddingGameComponent', () => {
  let component: AddingGameComponent;
  let fixture: ComponentFixture<AddingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
