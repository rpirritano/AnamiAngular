import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  routes as childRoutes,
  ProductsModule
} from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
//import { NavigationComponent } from './navigation/navigation.component';
//import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
//import { DashboardInvoiceNotifcationComponent } from './dashboard-invoice-notifcation/dashboard-invoice-notifcation.component';
//import { DashboardPosSummaryComponent } from './dashboard-pos-summary/dashboard-pos-summary.component';
//import { DashboardPosListComponent } from './dashboard-pos-list/dashboard-pos-list.component';
/*
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'withdrawl', component: WithdrawalComponent },
  { path: 'wallet', component: DashBoardComponent },
  { path: 'taxes', component: TaxesComponent },
  { path: 'pay-invoice', component: PayInvoiceComponent },
  { path: 'send-invoice', component: SendInvoiceComponent },
  { path: 'pos', component: PosComponent },
  { path: 'payroll', component: PayrollComponent }
  ];
*/
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
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
