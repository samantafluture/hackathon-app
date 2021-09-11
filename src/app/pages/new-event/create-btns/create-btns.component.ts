import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-btns',
  templateUrl: './create-btns.component.html',
  styleUrls: ['./create-btns.component.css'],
})
export class CreateBtnsComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  addEvent() {
    console.log('add event to events');
    this.router.navigate(['/']);
  }

  cancel() {
    console.log('cancel create event');
    this.location.back();
    return false;
  }
}
