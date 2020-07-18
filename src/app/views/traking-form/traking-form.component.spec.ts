import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingFormComponent } from './traking-form.component';

describe('TrakingFormComponent', () => {
  let component: TrakingFormComponent;
  let fixture: ComponentFixture<TrakingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrakingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrakingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
