import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../order/order.service';
import { Item } from '../models/item';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() special: boolean;
  @Output() removeItemEmitter = new EventEmitter<Item>();
  constructor(private orderService: OrderService, private auth: AuthService) {}

  ngOnInit() {
  }

  isAdmin(): boolean {
    return this.auth.isAdmin();
  }

  rateItem(rating: number): void {
    this.item.rating = rating;
  }

  removeItem(): void {
    this.removeItemEmitter.emit(this.item);
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
