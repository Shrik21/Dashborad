import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  savings: any[] = [];
  recentOrders: any[] = [];
  users: any[] = [];
  salesStatistics: number[] = [];
  balanceOverview: number[] = [];
  topProduct: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.savings = this.dataService.getSavings();
    this.recentOrders = this.dataService.getRecentOrders();
    this.users = this.dataService.getUsers();
    this.salesStatistics = this.dataService.getSalesStatistics();
    this.balanceOverview = this.dataService.getBalanceOverview();
    this.topProduct = this.dataService.getTopProduct();
  }
}
