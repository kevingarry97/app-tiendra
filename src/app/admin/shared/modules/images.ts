import { Product } from './product';

export interface Image {
  _id: string;
  images: [ string ];
  product: Product;
}
