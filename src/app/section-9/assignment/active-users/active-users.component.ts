import { Component, Input, inject } from '@angular/core';
import { UserModel, UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.scss',
})
export class ActiveUsersComponent {
  @Input() id: number;
  @Input() user: UserModel;
  usersService = inject(UsersService);
  changeStatus() {
    this.usersService.changeStatus(this.id, this.user);
  }
}
