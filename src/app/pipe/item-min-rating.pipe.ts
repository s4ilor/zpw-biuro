import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'itemMinRating'
})
export class ItemMinRatingPipe implements PipeTransform {

  transform(items: Array<Item>, minRating: number): Array<Item> {
    if (!minRating) {
      return items;
    }

    return items.filter(item => item.rating >= minRating );
  }


}
