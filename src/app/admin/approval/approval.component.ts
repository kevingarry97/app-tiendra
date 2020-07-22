import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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
      .subscribe(data => {
        console.log(data)
      })
    this.router.navigate(['admin/dashboard'])
  }

}
