import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from './items.service';
import { OrderService } from '../order/order.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  showForm: boolean;

  destinationFilter: string;
  startDateFilter: string;
  endDateFilter: string;
  minPriceFilter: string;
  maxPriceFilter: string;
  minRatingFilter: string;

  constructor(private itemService: ItemsService,
              private orderService: OrderService,
              private auth: AuthService) {}

  ngOnInit() {
    this.getItems();
  }

  isAdmin(): boolean {
    return this.auth.isAdmin();
  }

  isItemSpecial(item: Item): boolean {
    const lowestPriceItem = this.items.reduce((a, b) => a.price < b.price ? a : b);
    const highestPriceItem = this.items.reduce((a, b) => a.price > b.price ? a : b);
    return (item === lowestPriceItem || item === highestPriceItem);
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem(item: Item) {
    this.itemService.addItem(item).subscribe(newItem => this.items.push(newItem));
  }
  removeItem(item: Item) {
    if (confirm('Are you sure you want to delte this item?')) {
      this.itemService.removeItem(item).subscribe(res => { this.items.splice( this.items.indexOf(item), 1); });
    }
  }
  countItemsInOrder(): number {
    return this.orderService.countItemsInOrder();
  }
}
