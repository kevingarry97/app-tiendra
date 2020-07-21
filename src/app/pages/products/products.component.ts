import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('myOverlay', { static: true }) myOverlay: ElementRef;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  products = [];
  filteredProducts = [];
  category: string;
  subCategory: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct()
      .pipe(switchMap((data: any) => {
        this.products = data;
        return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('cat')
        this.subCategory = params.get('sub')

        this.filteredProducts = (this.category && this.subCategory) ?
          this.products
          .filter(p => p.product.category.name === this.category && p.product.subCategory.name === this.subCategory) :
          this.products
      })
  }

  filterOpen() {
    console.log('Clicked');
    if (this.filter.nativeElement.style.display === 'block') {
      this.filter.nativeElement.style.display = 'none';
      this.myOverlay.nativeElement.style.display = 'none';
    } else {
      this.filter.nativeElement.style.display = 'block';
      this.myOverlay.nativeElement.style.display = 'block';
    }
  }

  filterClose() {
    this.filter.nativeElement.style.display = 'none';
    this.myOverlay.nativeElement.style.display = 'none';
  }

}
