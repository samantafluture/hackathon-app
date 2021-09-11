import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBtnsComponent } from './create-btns.component';

describe('CreateBtnsComponent', () => {
  let component: CreateBtnsComponent;
  let fixture: ComponentFixture<CreateBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
