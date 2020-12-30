import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartItemCount: number;
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartService.carts$.subscribe((cart) => {
      cart ? (this.cartItemCount = cart['totalQty']) : [];
    });
  }
}
