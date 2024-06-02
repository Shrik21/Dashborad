import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  @Input() saving: any;

  constructor() { }

  ngOnInit(): void {
  }
}
