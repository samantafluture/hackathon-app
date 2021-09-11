import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css'],
})
export class FormCardComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
