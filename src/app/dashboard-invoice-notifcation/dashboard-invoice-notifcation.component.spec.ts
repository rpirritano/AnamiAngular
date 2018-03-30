import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvoiceNotifcationComponent } from './dashboard-invoice-notifcation.component';

describe('DashboardInvoiceNotifcationComponent', () => {
  let component: DashboardInvoiceNotifcationComponent;
  let fixture: ComponentFixture<DashboardInvoiceNotifcationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInvoiceNotifcationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInvoiceNotifcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
