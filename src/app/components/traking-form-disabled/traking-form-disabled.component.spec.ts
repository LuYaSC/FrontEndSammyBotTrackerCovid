import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingFormDisabledComponent } from './traking-form-disabled.component';

describe('TrakingFormDisabledComponent', () => {
  let component: TrakingFormDisabledComponent;
  let fixture: ComponentFixture<TrakingFormDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrakingFormDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrakingFormDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
