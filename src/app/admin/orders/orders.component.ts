import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  discount = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getDiscount()
      .subscribe((data: any) => {
        this.discount = data;
        console.log(this.discount);
      })
  }

}
