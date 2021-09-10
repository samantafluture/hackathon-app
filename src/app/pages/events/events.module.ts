import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventBtnNewComponent } from './event-btn-new/event-btn-new.component';

@NgModule({
  declarations: [EventCardComponent, EventsComponent, EventBtnNewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [EventCardComponent, EventsComponent]
})
export class EventsModule {}


