import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSavings() {
    return [
      { type: 'Car Loan', percentage: 15, change: '30% higher than last year' },
      { type: 'Home Loan', percentage: 30, change: '15% lower than last year' },
      { type: 'Personal Loan', percentage: 35, change: '5% higher than last year' },
      { type: 'Study Loan', percentage: 9, change: '10% higher than last year' }
    ];
  }

  getRecentOrders() {
    return [
      { customer: 'Frank Goodman', product: 'Laptop', date: '2023-10-25T17:44:25Z', status: 'Shipped', tracking: 'K8085820', shipping: 'Yes' },
      { customer: 'Hester Dickson', product: 'Display', date: '2023-08-28T10:04:58Z', status: 'Failed', tracking: 'D2497252', shipping: 'Yes' },
      { customer: 'Katina Thompson', product: 'Speakers', date: '2023-11-09T03:31:09Z', status: 'Pending', tracking: 'K6762008', shipping: 'No' },
      { customer: 'Rosie Hood', product: 'Mobile', date: '2023-11-27T06:43:08Z', status: 'Pending', tracking: 'D3116813', shipping: 'Yes' },
      { customer: 'Darlene Cannon', product: 'Display', date: '2023-07-18T23:35:59Z', status: 'Shipped', tracking: 'K5027868', shipping: 'Yes' }
    ];
  }

  getUsers() {
    return [
      { name: 'Lucile French', location: 'Afghanistan', activity: 42 },
      { name: 'Amber Graham', location: 'El Salvador', activity: 51 },
      { name: 'Elisa Salazar', location: 'Cayman Islands', activity: 99 },
      { name: 'Minnie Colon', location: 'Guinea', activity: 47 }
    ];
  }

  getSalesStatistics() {
    return [10, 20, 30, 40, 50, 60, 70];
  }

  getBalanceOverview() {
    return [15, 30, 25, 35, 20, 40, 45, 30, 25, 20, 10, 35];
  }

  getTopProduct() {
    return { mobile: 30, laptop: 50, tv: 20 };
  }
}
