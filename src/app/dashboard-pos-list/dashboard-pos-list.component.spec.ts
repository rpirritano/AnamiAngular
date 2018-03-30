import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPosListComponent } from './dashboard-pos-list.component';

describe('DashboardPosListComponent', () => {
  let component: DashboardPosListComponent;
  let fixture: ComponentFixture<DashboardPosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
