import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBtnNewComponent } from './event-btn-new.component';

describe('EventBtnNewComponent', () => {
  let component: EventBtnNewComponent;
  let fixture: ComponentFixture<EventBtnNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBtnNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBtnNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
