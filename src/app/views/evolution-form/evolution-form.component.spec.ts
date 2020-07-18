import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionFormComponent } from './evolution-form.component';

describe('EvolutionFormComponent', () => {
  let component: EvolutionFormComponent;
  let fixture: ComponentFixture<EvolutionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
