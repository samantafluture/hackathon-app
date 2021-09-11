import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-btn-new',
  templateUrl: './event-btn-new.component.html',
  styleUrls: ['./event-btn-new.component.css'],
})
export class EventBtnNewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createEvent() {
    this.router.navigate(['/create']);
  }
}
