import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { EventService } from 'src/app/services/event.service';

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
    tap(() => {
      console.log('Filtered data flux');
    }),
    switchMap((typedValue) => this.eventService.getAllEvents(typedValue))
  );

  events$ = merge(this.allEvents$, this.filteredByInput$);

  constructor(private eventService: EventService) {}
}
