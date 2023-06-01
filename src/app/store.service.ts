import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  users = [
    {
      id: 'a',
      firstName: 'John',
      lastName: 'Doe',
      age: 33,
    },
    {
      id: 'b',
      firstName: 'Jack',
      lastName: 'Doe',
      age: 20,
    },
    {
      id: 'c',
      firstName: 'Ben',
      lastName: 'Miller',
      age: 25,
    },
 ]
  constructor() { }
}
