import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductsService } from '../shared/products.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  @ViewChild('myOverlay', { static: true }) myOverlay: ElementRef;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  products = [];
  filteredProducts = [];
  category: string;
  subCategory: string;
  totalPosts = 10;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [2, 5, 10];
  private postsSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct(this.postsPerPage, this.currentPage);
    this.postsSub = this.productService
      .getPostUpdateListener()
      .pipe(
        switchMap((data: any) => {
          data ? (this.products = data) : {};
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('cat');
        this.subCategory = params.get('sub');

        this.filteredProducts =
          this.category && this.subCategory
            ? this.products.filter(
                (p) =>
                  p.product.category.name === this.category &&
                  p.product.subCategory.name === this.subCategory
              )
            : this.products;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.productService.getProduct(this.postsPerPage, this.currentPage);
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

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
