import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { OrderService } from './order.service';
import { NgForm} from '@angular/forms';
import {IUser} from './form.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  id: number;
  quantity: number;
  totalPrice: number;
  details: any[];
  myUser = new IUser(Math.floor(Math.random() * 1000), '', 'a@a.com', 'abc delhii', 436643 );

  constructor(private route: ActivatedRoute,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getHotelDetails(this.id)
        .subscribe((data) => this.details = data);


    this.route.queryParams
      .subscribe((data) => {
        this.quantity = data['person'];
      });

    this.totalPrice = (230 / 2) * this.quantity;
  }

  submitOrder(form: NgForm): void {
    console.log(form.value);
    this.orderService.placeOrder(form.value, this.totalPrice, this.details[0].name )
    .subscribe((data) =>  console.log('data submitted')) ;
  }

}
