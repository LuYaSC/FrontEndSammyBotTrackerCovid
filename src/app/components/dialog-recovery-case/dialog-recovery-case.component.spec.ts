import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecoveryCaseComponent } from './dialog-recovery-case.component';

describe('DialogRecoveryCaseComponent', () => {
  let component: DialogRecoveryCaseComponent;
  let fixture: ComponentFixture<DialogRecoveryCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRecoveryCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRecoveryCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
