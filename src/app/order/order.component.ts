import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service/order-service.component';
import { Item } from '../models/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private OrderService: OrderService) {}

  ngOnInit() {
  }

  getUniqueItemsInOrder(): Set<Item> {
    return new Set(this.OrderService.getItemsInOrder());
  }

  countItemsInOrder(): number {
    return this.OrderService.countItemsInOrder();
  }
}
