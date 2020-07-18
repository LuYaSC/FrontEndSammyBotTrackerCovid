import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSeetComponent } from './data-seet.component';

describe('DataSeetComponent', () => {
  let component: DataSeetComponent;
  let fixture: ComponentFixture<DataSeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
