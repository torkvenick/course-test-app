import { Component, Input, OnInit, inject } from '@angular/core';
import { UserModel, UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.scss',
})
export class InactiveUsersComponent implements OnInit {
  @Input() id: number;
  usersService = inject(UsersService);
  users: UserModel[];
  user: UserModel;

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.user = this.users[this.id];
  }
  changeStatus() {
    this.usersService.changeStatus(this.id, this.user);
  }
}
