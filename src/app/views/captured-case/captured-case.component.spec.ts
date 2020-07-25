import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturedCaseComponent } from './captured-case.component';

describe('CapturedCaseComponent', () => {
  let component: CapturedCaseComponent;
  let fixture: ComponentFixture<CapturedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturedCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
