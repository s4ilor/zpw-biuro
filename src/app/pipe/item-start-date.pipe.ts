import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'itemStartDate'
})
export class ItemStartDatePipe implements PipeTransform {

  transform(items: Array<Item>, dateString: string): Array<Item> {
    if (!dateString) {
      return items;
    }

    const date = new Date(dateString);
    return items.filter(item => item.startDate >= date );
  }

}
