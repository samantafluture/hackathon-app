import { EventService } from 'src/app/services/event.service';
import { Event } from './../../interfaces/event';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
})
export class NewEventComponent implements OnInit {
  event!: Event;
  startDate = new Date(2021, 12, 1);

  @Input()
  matDatepicker: any;

  @Input('for')
  datepicker!: any;

  constructor(
    private location: Location,
    private router: Router,
    private eventService: EventService
  ) {
    this.event = {
      name: '',
      description: '',
      price: 0,
      location: '',
      url: '',
      date: this.startDate,
    };
  }

  ngOnInit(): void {
    this.event = {
      name: '',
      description: '',
      price: 0,
      location: '',
      url: '',
      date: this.startDate,
    };
  }

  addEvent(event: Event) {
    this.eventService.createEvent(event).subscribe((res) => {
      res = this.event;
    });
    this.router.navigate(['/']);
  }

  cancel() {
    this.location.back();
    return false;
  }
}
