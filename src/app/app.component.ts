import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './pages/shared/shopping-cart.service';
import { ProductsService } from './pages/shared/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private cartService: ShoppingCartService,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.cartService.getCart();
  }
}
