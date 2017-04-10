import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ProductsService} from './app.service';

enum Category {Category1, Category2, Category3};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService]
})


export class AppComponent implements OnInit {  
  title = 'app works 2!';
  name = 'Product1';
  description = 'This is a test product';
  price: number = 10;
  category: Category = Category.Category1;
  categoryName: string = Category[0];
  isAvailable: boolean = false;
  products = [];
  contents = ['user guide', 'set of drawers', 'plug adapter'];
  
  constructor(private productService: ProductsService) {}
  
  ngOnInit(): void {
    this.getProducts();
  }
  
  onBuy() {
	this.isAvailable = !this.isAvailable;
  }
  
  getProducts(): void {
	this.products = this.productService.getProducts();
  }
}
