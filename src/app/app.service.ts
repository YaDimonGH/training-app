import { Injectable } from '@angular/core';
//import {ProductListComponent} from './product-list/product-list.component';

@Injectable()
export class ProductsService {
//	constructor(private productListComponent:ProductListComponent){}
	
	getProducts():  Array<string> {
		//return productListComponent.getProducts();
		return ['product1', 'product2'];
	} 
}