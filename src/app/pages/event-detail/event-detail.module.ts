import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventDetailComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class EventDetailModule {}
