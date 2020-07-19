import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObservationsComponent } from './dialog-observations.component';

describe('DialogObservationsComponent', () => {
  let component: DialogObservationsComponent;
  let fixture: ComponentFixture<DialogObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
