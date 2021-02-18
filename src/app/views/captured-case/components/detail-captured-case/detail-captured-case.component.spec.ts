import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCapturedCaseComponent } from './detail-captured-case.component';

describe('DetailCapturedCaseComponent', () => {
  let component: DetailCapturedCaseComponent;
  let fixture: ComponentFixture<DetailCapturedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCapturedCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCapturedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
