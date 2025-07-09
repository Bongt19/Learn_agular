import { Injectable } from '@angular/core';
import { ProductItems } from '../type/product-item.type';

@Injectable({
    providedIn: 'root'
})
export class ProductService{

  private _products: ProductItems[] = [];

  setProduct(products: ProductItems[]){
    this._products = products;
  }

  getProduct(): ProductItems[]{
    return this._products;
  }

  getProductById(id: number): ProductItems | undefined{
    return this._products.find(p => p.id === id);
  }


}
