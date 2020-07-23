import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './modules/product';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post(BACKEND_URL + 'product', product)
  }

  getProduct() {
    return this.http.get(BACKEND_URL + 'products')
  }

  getOne(id) {
    return this.http.get(`${BACKEND_URL}product/${id}`)
  }

  addToDiscount(id: number, percentage) {
    return this.http.post(BACKEND_URL + 'discount', {id, percentage})
      .subscribe(data => {
        console.log(data);
      })
  }

  getDiscount() {
    return this.http.get('https://server-tienda.herokuapp.com/api/discount')
  }
}
