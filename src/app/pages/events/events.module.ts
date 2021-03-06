import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventCardComponent, EventsComponent, EventSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [EventCardComponent, EventsComponent, EventSearchComponent]
})
export class EventsModule {}


