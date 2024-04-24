import { Component, Input, OnInit, inject } from '@angular/core';
import { UserModel, UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.scss',
})
export class ActiveUsersComponent implements OnInit {
  @Input() id: number;
  usersService = inject(UsersService);
  users: UserModel[];
  user: UserModel;

  ngOnInit() {
    this.users = this.usersService.activeUsers;
    this.user = this.users[this.id];
  }
  changeStatus() {
    this.usersService.changeStatus(this.id, this.user);
  }
}
