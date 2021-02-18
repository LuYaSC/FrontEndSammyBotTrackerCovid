import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCaseComponent } from './form-create-case.component';

describe('FormCreateCaseComponent', () => {
  let component: FormCreateCaseComponent;
  let fixture: ComponentFixture<FormCreateCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreateCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
