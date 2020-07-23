import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(BACKEND_URL + 'orders')
  }

  getOneOrder(id: string) {
    return this.http.get(BACKEND_URL + 'orders/' + id)
  }

  approve(id: string) {
    return this.http.get(BACKEND_URL + 'approve/' + id)
  }
}
