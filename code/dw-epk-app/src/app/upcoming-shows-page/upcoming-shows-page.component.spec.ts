import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingShowsPageComponent } from './upcoming-shows-page.component';

describe('UpcomingShowsPageComponent', () => {
  let component: UpcomingShowsPageComponent;
  let fixture: ComponentFixture<UpcomingShowsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingShowsPageComponent]
    });
    fixture = TestBed.createComponent(UpcomingShowsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
