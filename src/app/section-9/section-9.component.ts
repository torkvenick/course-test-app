import { Component } from '@angular/core';

@Component({
  selector: 'app-section-9',
  templateUrl: './section-9.component.html',
  styleUrl: './section-9.component.scss',
})
export class Section9Component {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
