import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-sales-statistics',
  templateUrl: './sales-statistics.component.html',
  styleUrls: ['./sales-statistics.component.css']
})
export class SalesStatisticsComponent implements OnInit {
  @Input() salesStatistics: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('salesChart');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
              label: 'Sales',
              data: this.salesStatistics,
              borderColor: '#4caf50',
              fill: false
            }]
          }
        });
      }
    }
  }
}
