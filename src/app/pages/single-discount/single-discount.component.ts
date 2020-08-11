import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';

declare let $: any;

@Component({
  selector: 'app-single-discount',
  templateUrl: './single-discount.component.html',
  styleUrls: ['./single-discount.component.css'],
})
export class SingleDiscountComponent implements OnInit, AfterViewInit {
  id: string;
  discount;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleDiscount(this.id).subscribe((data: any) => {
      this.discount = data;
    });
  }

  addToCart(discount) {
    this.cartService.createCart(discount);
  }

  ngAfterViewInit() {
    // Product Main img Slick
    $('#product-main-img').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-imgs',
    });

    // Product imgs Slick
    $('#product-imgs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: '#product-main-img',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            arrows: false,
            dots: true,
          },
        },
      ],
    });

    // Product img zoom
    var zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
      $('#product-main-img .product-preview').zoom();
    }
  }
}
