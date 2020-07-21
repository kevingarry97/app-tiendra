import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  id: string;
  orders;
  constructor(
    private orderService: OrdersService,
    route: ActivatedRoute
  ) {
    this.id = route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.orderService.getOneOrder(this.id)
      .subscribe(data => {
        this.orders = data;
      })
  }

  Approve() {
    this.orderService.approve(this.id)
      .subscribe()
  }

}
