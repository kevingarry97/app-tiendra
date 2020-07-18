import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product = [];
  discount = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct()
    .subscribe((data: any) => {
      this.product = data;
    })

    this.productService.getDiscount()
    .subscribe((data: any) => {
      this.discount = data;
    })
  }

}
