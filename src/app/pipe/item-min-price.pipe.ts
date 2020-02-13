import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'itemMinPrice'
})
export class ItemMinPricePipe implements PipeTransform {

  transform(items: Array<Item>, minPrice: number): Array<Item> {
    if (!minPrice) {
      return items;
    }

    return items.filter(item => item.price >= minPrice );
  }

}
