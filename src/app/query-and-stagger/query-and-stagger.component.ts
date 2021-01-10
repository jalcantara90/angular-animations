import { User } from './../shared/user.model';
import { trigger, transition, animate, style } from '@angular/animations';
import { Component } from '@angular/core';
import { slideInRightList } from '../shared/animations/slide-right.animation';



@Component({
  selector: 'app-query-and-stagger',
  templateUrl: './query-and-stagger.component.html',
  styleUrls: ['./query-and-stagger.component.scss'],
  animations: [
    slideInRightList,
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateX(0%)'}) )
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(100%)'}) )
      ]),
    ])
  ]
})
export class QueryAndStaggerComponent {
  showUserList = true;
  usersList: User[] = [new User(), new User(), new User(), new User(), new User(), new User()];

  constructor() { }

  showHideUserList() {
    this.showUserList = !this.showUserList;
  }

  add() {
    this.usersList = [...this.usersList, new User()];
  }

  remove() {
    const [popUser, ...userList] = this.usersList;
    this.usersList = userList;
  }

  trackByUsers(user: User): number {
    return user.id;
  }
}
