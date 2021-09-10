import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Events } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit, OnDestroy {
  eventsInput = new FormControl();
  events!: Events;
  private subscription!: Subscription;

  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.subscription = this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
