import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product;
  id;
  percentage: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this.productService.getOne(this.id)
      .subscribe(data => {
        this.product = data;
        console.log(this.product)
      })
  }

  addToDiscount() {
    console.log(this.id, this.percentage)
  }

}
