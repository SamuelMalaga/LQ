import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LQbannerComponent } from './lqbanner.component';

describe('LQbannerComponent', () => {
  let component: LQbannerComponent;
  let fixture: ComponentFixture<LQbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LQbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LQbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
