import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Events } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  eventsInput = new FormControl();
  events!: Events

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((res) => {
      this.events = res;
    })
  }
}
