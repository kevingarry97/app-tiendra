import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartStore = new BehaviorSubject<Object>(0);
  carts$ = this.cartStore.asObservable();
  constructor(private http: HttpClient) {}

  createCart(product) {
    return this.http
      .get(BACKEND_URL + 'add-to-cart/' + product._id, {
        withCredentials: true, // ========> Important
      })
      .subscribe((data: any) => {
        this.cartStore.next(data);
      });
  }

  createOrder(order) {
    return this.http
      .post(BACKEND_URL + 'checkout', order, {
        withCredentials: true,
      })
      .subscribe((data: any) => {
        this.cartStore.next(data);
      });
  }

  getCart() {
    return this.http
      .get(BACKEND_URL + 'shopping-cart', {
        withCredentials: true,
      })
      .subscribe((data: any) => {
        this.cartStore.next(data);
      });
  }

  removeItem(product) {
    return this.http
      .get(BACKEND_URL + 'remove/' + product, {
        withCredentials: true,
      })
      .subscribe((data) => {
        this.cartStore.next(data);
      });
  }
}
