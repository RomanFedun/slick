import { Component, ElementRef, ViewChild } from '@angular/core';
import { StoreService } from '../store.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  users: User[]
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  constructor(
    private storeService: StoreService
  ) {
    this.users = storeService.users
  }

  onSearch(): void {
    this.users = this.storeService.users;
     const range = this.inputSearch.nativeElement.value.split(' ')[1].split('-');
    if (range[0] < range[1]) {
      this.users = this.users.filter(user => {
        return user.age >= range[0] && user.age <= range[1]
      })
    }
  }
}
