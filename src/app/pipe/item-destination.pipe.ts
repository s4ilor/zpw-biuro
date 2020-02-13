import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'itemDestination'
})
export class ItemDestinationPipe implements PipeTransform {

  transform(items: Array<Item>, destination: string): Array<Item> {
    if (!destination) {
      return items;
    }
    return items.filter(item => item.destination.toLowerCase().includes(destination.toLowerCase()) );
  }

}
