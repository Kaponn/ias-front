import { Injectable } from '@angular/core';
import { Item } from '../item/item';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  lastId = 0;
  items: Item[] = [];

  async addItem(item: Item) {
    if (!item.id) {
      item.id = ++this.lastId;
    }
    this.items.push(item);
  }

  async deleteItem(id: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
      }
    }
    // console.log(this.items);
    // this.items = this.items.filter(item => item.id !== id);
    // console.log(this.items);
  }

  async getItem(id: number): Promise<Item> {
    return this.items.filter(item => item.id === id).pop();
  }

  async getAll() {
    return this.items;
  }

  constructor() {}
}
