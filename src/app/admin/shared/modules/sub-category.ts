import { Category } from './category';

export interface SubCategories {
  _id?: string;
  name: string;
  categoryId: Category;
}
