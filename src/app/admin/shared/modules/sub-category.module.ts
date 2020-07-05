import { Category } from './category.module';

export interface SubCategories {
  _id?: string;
  name: string;
  categoryId: Category;
}
