import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {
  @Input() topProduct: any = {};

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('topProductChart');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Mobile', 'Laptop', 'TV'],
            datasets: [{
              data: [this.topProduct.mobile || 0, this.topProduct.laptop || 0, this.topProduct.tv || 0],
              backgroundColor: ['#4caf50', '#2196f3', '#ff5722']
            }]
          }
        });
      }
    }
  }
}
