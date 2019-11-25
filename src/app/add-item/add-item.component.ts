import { Component, OnInit } from '@angular/core';
import { AddItemService } from './add-item-service.service';
import { Item } from '../item/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(private addItemService: AddItemService) {}

  items: Item[] = this.addItemService.items;

  newItem = new Item();

  async addItem() {
    this.addItemService.addItem(this.newItem);
    this.newItem = new Item();
  }

  async deleteItem(item: Item) {
    this.addItemService.deleteItem(item.id);
  }

  async getAll() {
    this.addItemService.getAll();
  }

  ngOnInit() {}
}
