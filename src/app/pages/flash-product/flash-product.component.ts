import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/admin/shared/product.service';

@Component({
  selector: 'app-flash-product',
  templateUrl: './flash-product.component.html',
  styleUrls: ['./flash-product.component.css']
})
export class FlashProductComponent implements OnInit {

  discounts: [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getDiscount()
      .subscribe((data: any) => {
        this.discounts = data;
        console.log(this.discounts);
      })
  }

}
