import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { MailService } from '../shared/mail.service';
import { OrdersService } from '../shared/orders.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product = [];
  discount = [];
  mails = [];
  orders = [];
  category = [];
  sub = [];
  constructor(
    private mailService: MailService,
    private productService: ProductService,
    private orderService: OrdersService,
    private categories: CategoryService,
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe((data: any) => {
        this.orders = data;
      })

    this.productService.getProduct()
      .subscribe((data: any) => {
      this.product = data;
    })

    this.mailService.getMails()
      .subscribe((data: any) => {
        this.mails = data;
      })

    this.productService.getDiscount()
      .subscribe((data: any) => {
      this.discount = data;
    })

    this.categories.getCategory()
      .subscribe((data: any) => {
        this.category = data;
      })

    this.categories.getSubs()
      .subscribe((data: any) => {
        this.sub = data;
      })
  }

}
