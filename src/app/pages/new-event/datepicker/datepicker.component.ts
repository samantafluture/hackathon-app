import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {

  startDate = new Date(2021, 12, 1);

  @Input()
  matDatepicker: any;

  @Input('for')
  datepicker!: any;

  constructor() { }


}
