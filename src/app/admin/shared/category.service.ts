import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './modules/category';
import { SubCategories } from './modules/sub-category';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(category: Category) {
    return this.http.post<{message: string}>(BACKEND_URL + 'categories', category)
  }

  addSubs(sub: SubCategories) {
    return this.http.post(BACKEND_URL + 'sub', sub);
  }

  getCategory() {
    return this.http.get(BACKEND_URL + 'categories');
  }

  getSubs() {
    return this.http.get(BACKEND_URL+ 'sub');
  }
}
