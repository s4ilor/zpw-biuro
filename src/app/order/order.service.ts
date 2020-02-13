import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart = [];
  constructor() { }

  getItemsInShoppingCart(): Array<Item> {
    return this.shoppingCart;
  }

  addItemToShoppingCart(item: Item) {
    this.shoppingCart.push(item);
  }

  removeItemFromShoppingCart(item: Item) {
    const index = this.shoppingCart.indexOf(item);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
  }
  countItemInShoppingCart(item: Item) {
    return this.shoppingCart.filter(i => i === item).length;
  }

  countItemsInShoppingCart(): number {
   return this.shoppingCart.length;
  }
}
