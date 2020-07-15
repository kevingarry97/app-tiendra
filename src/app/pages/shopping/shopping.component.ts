import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../shared/model/shopping-cart';
import { ShoppingCartItem } from '../shared/model/shopping-cart-item';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  carts;
  constructor(private cartService: ShoppingCartService) {
    this.cartService.getCart()
  }

  ngOnInit(): void {
    this.cartService.carts$.subscribe(data => {
      this.carts = data;
    })
  }

  onRemove(product) {
    this.cartService.removeItem(product._id);
  }

}
