import { Injectable, inject } from '@angular/core';
import { CounterService } from './counter.service';

export interface UserModel {
  name: string;
  status: string;
}
@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers: UserModel[] = [
    { name: 'Max', status: 'active' },
    { name: 'Anna', status: 'active' },
    { name: 'Chris', status: 'active' },
  ];

  inactiveUsers: UserModel[] = [
    { name: 'Manu', status: 'inactive' },
    { name: 'Peter', status: 'inactive' },
    { name: 'David', status: 'inactive' },
  ];

  counterService = inject(CounterService);

  changeStatus(id: number, user: UserModel) {
    if (user.status === 'active') {
      user.status = 'inactive';
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    } else {
      user.status = 'active';
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
    }
    this.counterService.increment();
  }
}
