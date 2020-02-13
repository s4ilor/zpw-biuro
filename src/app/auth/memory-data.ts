import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../models/item';
import { Injectable } from '@angular/core';
import { ITEMS } from '../mocks/mocks';

@Injectable({
  providedIn: 'root',
})
export class MemoryData implements InMemoryDbService {
  createDb() {
    const items = ITEMS;
    return {items};
  }

  // Generate new id
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}
