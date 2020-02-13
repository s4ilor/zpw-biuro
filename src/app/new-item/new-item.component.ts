import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from '../models/item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  @Output() addItemEmitter = new EventEmitter<Item>();

  itemForm = new FormGroup({
    name: new FormControl(''),
    destination: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    rating: new FormControl(''),
    price: new FormControl(''),
    limit: new FormControl(''),
    description: new FormControl(''),
    imageSrc: new FormControl('')
  });

  onSubmit() {
    this.addItemEmitter.emit(this.itemForm.value);
    this.itemForm.reset();
  }
}
