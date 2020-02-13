import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'itemMaxPrice'
})
export class ItemMaxPricePipe implements PipeTransform {


  transform(items: Array<Item>, maxPrice: number): Array<Item> {
    if (!maxPrice) {
      return items;
    }

    return items.filter(item => item.price <= maxPrice );
  }

}
