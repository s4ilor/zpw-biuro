import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items/items.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: Item;

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getItem();
    const element = document.getElementById('item-details');
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemsService.getItem(id)
      .subscribe(item => this.item = item);
  }

}
