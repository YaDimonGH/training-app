import { Component, OnInit } from '@angular/core';

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  name: string = "";
  price: number = 0;

  toString() {
    return this.name + " costs " + this.price;
  }
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor() {
    this.products = [new Product("Product1",10), new Product("Product2", 35)];
   }

  ngOnInit() {
  }

  getProducts(): Array<Product> {
	return this.products;
  }
}
