import { Component } from '@angular/core';
import { MOCK_EVENT_DATA_LONG } from 'src/models/mock-data';
import { EventDataDTO } from 'src/models/models';

@Component({
  selector: 'app-upcoming-shows-page',
  templateUrl: './upcoming-shows-page.component.html',
  styleUrls: ['./upcoming-shows-page.component.css']
})
export class UpcomingShowsPageComponent {

  upcomingEvents: EventDataDTO[] =  MOCK_EVENT_DATA_LONG;

}
