import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominoesComponent } from './dominoes.component';

describe('DominoesComponent', () => {
  let component: DominoesComponent;
  let fixture: ComponentFixture<DominoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DominoesComponent]
    });
    fixture = TestBed.createComponent(DominoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
