import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './modules/category.module';
import { SubCategories } from './modules/sub-category.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(category: Category) {
    return this.http.post<{message: string}>('http://localhost:3000/api/categories', category)
  }

  addSubs(sub: SubCategories) {
    return this.http.post('http://localhost:3000/api/sub', sub);
  }

  getCategory() {
    return this.http.get('http://localhost:3000/api/categories');
  }

  getSubs() {
    return this.http.get('http://localhost:3000/api/sub');
  }
}
