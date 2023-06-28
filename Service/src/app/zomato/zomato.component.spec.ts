import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoComponent } from './zomato.component';

describe('ZomatoComponent', () => {
  let component: ZomatoComponent;
  let fixture: ComponentFixture<ZomatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZomatoComponent]
    });
    fixture = TestBed.createComponent(ZomatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
