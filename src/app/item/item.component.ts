import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Item } from '../models/item';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() special: boolean;
  @Output() removeItemEmitter = new EventEmitter<Item>();
  constructor(private shoppingCartService: ShoppingCartService, private auth: AuthService) {}

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

  addItemToShoppingCart(): void {
      this.shoppingCartService.addItemToShoppingCart(this.item);
  }
  removeItemFromShoppingCart(): void {
      this.shoppingCartService.removeItemFromShoppingCart(this.item);
  }

  howManyLeft(): number {
    return this.item.limit - (this.shoppingCartService.countItemInShoppingCart(this.item));
  }

}
