import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new-event.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CreateBtnsComponent } from './create-btns/create-btns.component';

@NgModule({
  declarations: [NewEventComponent, DatepickerComponent, CreateBtnsComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class NewEventModule {}
