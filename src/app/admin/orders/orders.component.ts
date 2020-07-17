import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: [];
  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe((data: any) => {
        this.orders = data
      })
  }

}
