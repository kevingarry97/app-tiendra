import { Component, OnInit } from '@angular/core';
import { MailService } from '../shared/mail.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product = [];
  discount = [];
  mails: [];
  constructor(
    private mailService: MailService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProduct()
    .subscribe((data: any) => {
      this.product = data;
    })

    this.mailService.getMails()
      .subscribe((data: any) => {
        this.mails = data;
        console.log(this.mails)
      })

    this.productService.getDiscount()
    .subscribe((data: any) => {
      this.discount = data;
    })
  }

}
