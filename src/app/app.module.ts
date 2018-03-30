import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardInvoiceNotifcationComponent } from './dashboard-invoice-notifcation/dashboard-invoice-notifcation.component';
import { DashboardPosSummaryComponent } from './dashboard-pos-summary/dashboard-pos-summary.component';
import { DashboardPosListComponent } from './dashboard-pos-list/dashboard-pos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardContainerComponent,
    DashboardInvoiceNotifcationComponent,
    DashboardPosSummaryComponent,
    DashboardPosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
