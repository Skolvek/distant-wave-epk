import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingShowCardComponent } from './upcoming-show-card.component';

describe('UpcomingShowCardComponent', () => {
  let component: UpcomingShowCardComponent;
  let fixture: ComponentFixture<UpcomingShowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingShowCardComponent]
    });
    fixture = TestBed.createComponent(UpcomingShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
