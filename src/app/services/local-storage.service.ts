import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(item: string): any {
    return JSON.parse(localStorage.getItem(item));
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  deleteAllItems(): void {
    localStorage.clear();
  }
}
