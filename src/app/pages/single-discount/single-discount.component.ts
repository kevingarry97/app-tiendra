import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';

declare let $: any;

@Component({
  selector: 'app-single-discount',
  templateUrl: './single-discount.component.html',
  styleUrls: ['./single-discount.component.css'],
})
export class SingleDiscountComponent implements OnInit {
  id: string;
  discount;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleDiscount(this.id).subscribe((data: any) => {
      data ? (this.discount = data) : {};
    });
  }
}
