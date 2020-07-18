import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSeetDialogComponent } from './data-seet-dialog.component';

describe('DataSeetDialogComponent', () => {
  let component: DataSeetDialogComponent;
  let fixture: ComponentFixture<DataSeetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSeetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSeetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
