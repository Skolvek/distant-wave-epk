import { Component, Input, OnInit } from '@angular/core';
import { EventDataDTO } from 'src/models/models';

@Component({
  selector: 'app-upcoming-show-card',
  templateUrl: './upcoming-show-card.component.html',
  styleUrls: ['./upcoming-show-card.component.css']
})
export class UpcomingShowCardComponent implements OnInit {

    // NOTE: the `!` is the "definite assignment assertion", indicating that while this
    // variable is not defined at compile time, it will be defined by the application
    // at run time.
    @Input() eventData!: EventDataDTO;

    ngOnInit(): void {

    }
}
