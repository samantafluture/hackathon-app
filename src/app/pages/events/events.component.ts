import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  eventsInput = new FormControl();
  events$ = this.eventsInput.valueChanges.pipe(
    tap(console.log),
    switchMap((typedValue) => this.eventService.getAllEvents(typedValue)),
    tap(console.log)
  );

  constructor(private eventService: EventService) {}
}
