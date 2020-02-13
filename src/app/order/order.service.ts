import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order = [];
  constructor() { }

  getItemsInOrder(): Array<Item> {
    return this.order;
  }

  addItemToOrder(item: Item) {
    this.order.push(item);
  }

  removeItemFromOrder(item: Item) {
    const index = this.order.indexOf(item);
    if (index > -1) {
      this.order.splice(index, 1);
    }
  }
  countItemInOrder(item: Item) {
    return this.order.filter(i => i === item).length;
  }

  countItemsInOrder(): number {
   return this.order.length;
  }
}
