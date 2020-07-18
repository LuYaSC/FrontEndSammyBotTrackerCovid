import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInAwaitComponent } from './case-in-await.component';

describe('CaseInAwaitComponent', () => {
  let component: CaseInAwaitComponent;
  let fixture: ComponentFixture<CaseInAwaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseInAwaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
