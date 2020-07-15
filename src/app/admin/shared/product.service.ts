import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './modules/product';
import { Discount } from './modules/discount';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post('https://server-tienda.herokuapp.com/api/product', product)
  }

  getProduct() {
    return this.http.get('https://server-tienda.herokuapp.com/api/products')
  }

  getOne(id) {
    return this.http.get(`https://server-tienda.herokuapp.com/api/product/${id}`)
  }
}
