import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsComponent } from './savings/savings.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { UsersComponent } from './users/users.component';
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { TopProductComponent } from './top-product/top-product.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SavingsComponent,
    RecentOrdersComponent,
    UsersComponent,
    SalesStatisticsComponent,
    BalanceOverviewComponent,
    TopProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
