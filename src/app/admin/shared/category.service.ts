import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './modules/category';
import { SubCategories } from './modules/sub-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(category: Category) {
    return this.http.post<{message: string}>('https://server-tienda.herokuapp.com/api/categories', category)
  }

  addSubs(sub: SubCategories) {
    return this.http.post('https://server-tienda.herokuapp.com/api/sub', sub);
  }

  getCategory() {
    return this.http.get('https://server-tienda.herokuapp.com/api/categories');
  }

  getSubs() {
    return this.http.get('https://server-tienda.herokuapp.com/api/sub');
  }
}
