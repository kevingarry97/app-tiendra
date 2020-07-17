import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://server-tienda.herokuapp.com/api/orders')
      .subscribe((data: any) => {
        this.orders = data;
        console.log(data)
      })
  }

}
