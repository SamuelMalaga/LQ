import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankfeedComponent } from './rankfeed.component';

describe('RankfeedComponent', () => {
  let component: RankfeedComponent;
  let fixture: ComponentFixture<RankfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
