import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product;

  constructor(
    private cartService: ShoppingCartService,) { }

  ngOnInit(): void {
  }

}
