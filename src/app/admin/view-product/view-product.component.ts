import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    private route: ActivatedRoute,
    private http: HttpClient
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
    this.http.post("https://server-tienda.herokuapp.com/api/discount", {id: this.id, percentage: +this.percentage})
      .subscribe(data => {
        console.log(data);
      })
  }

}
