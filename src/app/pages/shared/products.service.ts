import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private postsUpdated = new Subject();

  constructor(private http: HttpClient) { }

  getProduct(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    return this.http.get('https://server-tienda.herokuapp.com/api/products' + queryParams)
      .subscribe((data: any) => {
        this.postsUpdated.next([...data])
      })
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getSingleProduct(id) {
    return this.http.get(`https://server-tienda.herokuapp.com/api/product/${id}`);
  }
}
