import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new-event.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormCardComponent } from './form-card/form-card.component';

@NgModule({
  declarations: [NewEventComponent, FormCardComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class NewEventModule {}
