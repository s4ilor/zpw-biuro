import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { OrderService} from '../order/order.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() item: Item;
  @Output() removeItemEmitter = new EventEmitter<Item>();

  constructor(private orderService: OrderService) {}


  ngOnInit() {
  }

  addItemToOrder(): void {
    this.orderService.addItemToOrder(this.item);
  }
  removeItemFromOrder(): void {
    this.orderService.removeItemFromOrder(this.item);
  }

  howManyLeft(): number {
    return this.item.limit - (this.orderService.countItemInOrder(this.item));
  }
}
