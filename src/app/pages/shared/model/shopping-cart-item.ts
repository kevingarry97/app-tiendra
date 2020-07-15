import { Product } from 'src/app/admin/shared/modules/product';

export interface ShoppingCartItem {
  product: Product;
  totalQty: number;
  totalPrice: number;
}
