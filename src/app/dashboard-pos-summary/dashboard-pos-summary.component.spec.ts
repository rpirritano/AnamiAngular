import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPosSummaryComponent } from './dashboard-pos-summary.component';

describe('DashboardPosSummaryComponent', () => {
  let component: DashboardPosSummaryComponent;
  let fixture: ComponentFixture<DashboardPosSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPosSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPosSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
