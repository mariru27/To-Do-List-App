import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneActivitiesComponent } from './done-activities.component';

describe('DoneActivitiesComponent', () => {
  let component: DoneActivitiesComponent;
  let fixture: ComponentFixture<DoneActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
