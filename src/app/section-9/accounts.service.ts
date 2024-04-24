import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

export interface Account {
  name: string;
  status: string;
}

@Injectable()
export class AccountsService {
  private accounts = [
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

  public pubAccounts = this.accounts;

  constructor(private loggingService: LoggingService) {}

  addAccount(account: Account) {
    this.accounts.push(account);
    this.loggingService.logStatusChange(account.status);
  }

  changeStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
