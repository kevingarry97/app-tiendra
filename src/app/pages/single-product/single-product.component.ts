import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  id: string;
  product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(this.id).subscribe((data: any) => {
      this.product = data;
    });
  }
}
