/* eslint-disable import/no-unresolved */
// src/items/items.interface.ts

import { Item } from './item.interface';

export interface Items {
  [key: number]: Item;
}
