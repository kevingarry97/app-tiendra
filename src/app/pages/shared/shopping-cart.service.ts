import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartStore = new BehaviorSubject<Object>(0);
  carts$ = this.cartStore.asObservable()
  constructor(private http: HttpClient) {}

  createCart(product) {
    return this.http.get('https://server-tienda.herokuapp.com/api/add-to-cart/' + product._id, {
      withCredentials: true // ========> Important
    }).subscribe((data: any) => {
      this.cartStore.next(data)
    })
  }

  createOrder(order) {
    return this.http.post('https://server-tienda.herokuapp.com/api/checkout', order, {
      withCredentials: true
    }).subscribe((data: any) => {
      this.cartStore.next(data);
    })
  }

  getCart() {
    return this.http.get('https://server-tienda.herokuapp.com/api/shopping-cart', {
      withCredentials: true
    }).subscribe((data: any) => {
      this.cartStore.next(data)
    })
  }

  removeItem(product) {
    return this.http.get('https://server-tienda.herokuapp.com/api/remove/' + product, {
      withCredentials: true
    })
      .subscribe(data => {
        this.cartStore.next(data)
      })
  }

}
