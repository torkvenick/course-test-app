import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  counter;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.plusCount.subscribe((counter) => {
      this.counter = counter;
    });
  }

  usersService = inject(UsersService);
  activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers;
}
