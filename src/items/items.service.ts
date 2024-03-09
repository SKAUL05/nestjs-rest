import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '343567',
      name: '1',
      qty: 100,
      description: 'Hello',
    },
    {
      id: '343568',
      name: '2',
      qty: 100,
      description: 'Hello',
    },
    {
      id: '343569',
      name: '3',
      qty: 100,
      description: 'Hello',
    },
  ];
  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
