import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverCaseComponent } from './recover-case.component';

describe('RecoverCaseComponent', () => {
  let component: RecoverCaseComponent;
  let fixture: ComponentFixture<RecoverCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
