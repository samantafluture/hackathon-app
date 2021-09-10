import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';
import { EventService } from 'src/app/services/event.service';

const TYPING_DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  eventsInput = new FormControl();
  allEvents$ = this.eventService
    .getAllEvents()
    .pipe(tap(() => console.log('Initial data flux')));
  filteredByInput$ = this.eventsInput.valueChanges.pipe(
    debounceTime(TYPING_DEBOUNCE_TIME),
    tap(() => {
      console.log('Filtered data flux');
    }),
    tap(console.log),
    filter((typedValue) => typedValue.length >= 3 || !typedValue.length),
    switchMap((typedValue) => this.eventService.getAllEvents(typedValue)),
    tap(console.log)
  );

  events$ = merge(this.allEvents$, this.filteredByInput$);

  constructor(private eventService: EventService) {}
}
