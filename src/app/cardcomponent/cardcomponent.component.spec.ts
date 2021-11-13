import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcomponentComponent } from './cardcomponent.component';

describe('CardcomponentComponent', () => {
  let component: CardcomponentComponent;
  let fixture: ComponentFixture<CardcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
