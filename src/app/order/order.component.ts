import { Component, OnInit } from '@angular/core';
import { OrderService} from './order.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) {}

  ngOnInit() {
  }

  getUniqueItemsInOrder(): Set<Item> {
    return new Set(this.orderService.getItemsInOrder());
  }

  countItemsInOrder(): number {
    return this.orderService.countItemsInOrder();
  }
}
