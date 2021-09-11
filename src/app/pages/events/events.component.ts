import { Event } from './../../interfaces/event';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
const TYPING_DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  eventsInput = new FormControl();
  allEvents$ = this.eventService.getAllEvents();
  filteredByInput$ = this.eventsInput.valueChanges.pipe(
    debounceTime(TYPING_DEBOUNCE_TIME),
    filter((typedValue) => typedValue.length >= 3 || !typedValue.length),
    distinctUntilChanged(),
    switchMap((typedValue) => this.eventService.getAllEvents(typedValue))
  );

  events$ = merge(this.allEvents$, this.filteredByInput$);

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  editEvent() {
    this.router.navigate(['/event']);
  }

  removeEvent(id: any) {
    this.eventService.removeEvent(id).subscribe();
  }
}
