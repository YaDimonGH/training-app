import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []; 
  
  constructor() { }

  ngOnInit() {
  }
  
  getProducts(): Array<string> {
	return ['product3', 'product41'];
  }  
}