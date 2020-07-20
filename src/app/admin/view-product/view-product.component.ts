import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this.productService.getOne(this.id)
      .subscribe(data => {
        this.product = data;
      })
  }

  addToDiscount() {
    this.productService.addToDiscount(this.id, +this.percentage)
    this.router.navigate(['/admin'])
  }

}
