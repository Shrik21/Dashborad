import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.css']
})
export class RecentOrdersComponent implements OnInit {
  @Input() recentOrders: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
