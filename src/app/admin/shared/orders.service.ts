import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get('https://server-tienda.herokuapp.com/api/orders')
  }

  getOneOrder(id: string) {
    return this.http.get('https://server-tienda.herokuapp.com/api/orders/' + id)
  }

  approve(id: string) {
    return this.http.get('https://server-tienda.herokuapp.com/api/approve/' + id)
  }
}
