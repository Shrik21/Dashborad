import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.css']
})
export class BalanceOverviewComponent implements OnInit {
  @Input() balanceOverview: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('balanceChart');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Balance',
              data: this.balanceOverview,
              backgroundColor: '#4caf50'
            }]
          }
        });
      }
    }
  }
}
