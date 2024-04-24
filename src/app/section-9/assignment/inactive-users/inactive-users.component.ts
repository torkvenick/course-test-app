import { Component, Input, inject } from '@angular/core';
import { UserModel, UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.scss',
})
export class InactiveUsersComponent {
  @Input() id: number;
  @Input() user: UserModel;
  usersService = inject(UsersService);
  changeStatus() {
    this.usersService.changeStatus(this.id, this.user);
  }
}
