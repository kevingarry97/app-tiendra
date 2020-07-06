import { Category } from './category';
import { SubCategories } from './sub-category';

export interface Product {
  productName: string,
  categoryId: Category;
  subCategoryId: SubCategories,
  sizes: string[];
  availability: string;
  colors: string;
  caption: string;
  item: string;
  tag: string;
  images: File[];
  details: string[];
  description: string;
  amount: string;
}
